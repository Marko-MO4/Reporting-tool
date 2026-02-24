// Reporting Tool – UI Mock (no backend)
// Stores data in localStorage to simulate persistent server data

const KEY = "rt_mock_v1";

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function nowISO(){ return new Date().toISOString(); }
function fmtDate(iso){
  if(!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleString(undefined, {year:"numeric", month:"short", day:"2-digit", hour:"2-digit", minute:"2-digit"});
}
function daysSince(iso){
  if(!iso) return 9999;
  const ms = Date.now() - new Date(iso).getTime();
  return Math.floor(ms / (1000*60*60*24));
}
function moneyEUR(n){
  if(n === null || n === undefined || n === "") return "—";
  return new Intl.NumberFormat(undefined, {style:"currency", currency:"EUR", maximumFractionDigits:0}).format(Number(n) || 0);
}

function load(){
  try{
    const raw = localStorage.getItem(KEY);
    if(!raw) return { customers: [], monthly: defaultMonthly(), meta: { version: 1 } };
    return JSON.parse(raw);
  }catch(e){
    return { customers: [], monthly: defaultMonthly(), meta: { version: 1 } };
  }
}
function save(db){ localStorage.setItem(KEY, JSON.stringify(db)); }

function defaultMonthly(){
  return {
    activeCustomers: 0,
    revenueAtRisk: 0,
    renewals: "",
    obligations: "",
    requests: "",
    avgTicketAge: 0,
    predictability: "",
    scopeChanges: "",
    cfIncidents: "",
    adoption: ""
  };
}

function ensureDB(){
  const db = load();
  if(!db.monthly) db.monthly = defaultMonthly();
  if(!db.customers) db.customers = [];
  save(db);
  return db;
}

function seed(){
  const db = ensureDB();
  const names = ["AsterBank", "Northwind", "Fabrikam", "Contoso", "BluePeak", "HelioCare", "OrionLogistics", "DeltaRetail", "SolarGrid", "AquaWorks", "NimbusTel", "StoneBridge"];
  const tags = ["Renewal", "Upsell", "Backlog", "Incident", "Delivery", "Scope", "Adoption", "VIP"];
  db.customers = names.map((n, i) => {
    const status = (i%7===0) ? "Red" : (i%3===0 ? "Amber" : "Green");
    const updated = new Date(Date.now() - (i*2)*86400000).toISOString();
    return {
      id: "c_" + Math.random().toString(16).slice(2),
      name: n,
      status,
      updatedAt: updated,
      commitments: status==="Green" ? "• Next release: 2026-03-08\n• Training session: 2026-03-15" : "• Fix integration: 2026-03-01\n• Deliver report automation: 2026-03-20",
      risks: status==="Red" ? "• Delivery risk: missing dependencies\n• Commercial risk: renewal uncertain" : (status==="Amber" ? "• Operational risk: support capacity\n• Delivery: scope growth" : "• Minor risk: key user availability"),
      incidents: status==="Red" ? "• Sev2 outage: 2026-02-18 (2h)\n• Sev3 degraded performance: 2026-02-21" : (status==="Amber" ? "• Sev3 incident: intermittent auth errors" : ""),
      escalations: status==="Red" ? "Decision needed: prioritize hotfix vs roadmap feature." : "",
      notes: status==="Green" ? "Stable account. Keep focus on adoption." : "Weekly focus: reduce open items and keep communication tight.",
      tags: tags.filter((_,t) => (i+t)%4===0)
    };
  });
  db.monthly = {
    activeCustomers: db.customers.length,
    revenueAtRisk: 250000,
    renewals: "3 renewals (Q2), 1 expansion likely",
    obligations: "• SLA review for VIP accounts\n• Quarterly security audit deliverables",
    requests: "P0: 1, P1: 6, P2: 14",
    avgTicketAge: 18,
    predictability: "82% on-time",
    scopeChanges: "Requested: 7 · Approved: 4",
    cfIncidents: "This month: 2 customers impacted (1x Sev2, 1x Sev3)",
    adoption: "Usage trending up in 5 accounts; 2 accounts flat."
  };
  save(db);
}

function reset(){
  localStorage.removeItem(KEY);
}

let role = null; // "PAM" or "GM"
let selectedCustomerId = null;
const chipCatalog = ["Renewal","Upsell","Backlog","Incident","Delivery","Scope","Adoption","VIP","Roadmap","Support"];

function setRole(r){
  role = r;
  $("#userBadge").classList.remove("hidden");
  $("#btnSwitchRole").classList.remove("hidden");
  $("#userBadge").textContent = (r === "PAM") ? "Role: Project/Account Manager" : "Role: General Manager";
  showView(r === "PAM" ? "viewPAM" : "viewGM");
  if(r === "PAM"){
    renderPAM();
  }else{
    renderGM();
  }
}

function showView(id){
  ["viewLogin","viewPAM","viewGM"].forEach(v => $("#"+v).classList.add("hidden"));
  $("#"+id).classList.remove("hidden");
}

function statusDot(status){
  const s = (status||"").toLowerCase();
  const cls = (s==="green") ? "green" : (s==="amber") ? "amber" : (s==="red") ? "red" : "gray";
  return `<span class="dot ${cls}"></span>`;
}

function renderPAM(){
  const db = ensureDB();
  // default tab state
  setPAMTab(window.__pamTab || "customers");
  renderPAMList();
  renderPAMEditor();
  renderMonthlyForm();
}

function setPAMTab(tab){
  window.__pamTab = tab;
  $$(".seg-btn").forEach(b => b.classList.toggle("active", b.dataset.tab===tab));
  $("#pamMonthly").classList.toggle("hidden", tab !== "monthly");
  // customer editor area stays visible; list stays visible. This is a mock: monthly is additional card.
}

function filteredCustomers(db){
  const q = ($("#pamSearch").value||"").toLowerCase().trim();
  const f = $("#pamFilterStatus").value;
  return db.customers
    .filter(c => !q || c.name.toLowerCase().includes(q))
    .filter(c => !f || c.status===f)
    .sort((a,b)=> a.name.localeCompare(b.name));
}

function renderPAMList(){
  const db = ensureDB();
  const list = $("#pamCustomerList");
  const items = filteredCustomers(db);

  if(items.length===0){
    list.innerHTML = `<div class="item"><div class="item-title">No customers</div><div class="item-sub">Add one to start reporting.</div></div>`;
    return;
  }

  list.innerHTML = items.map(c => {
    const stale = daysSince(c.updatedAt) > 7;
    const sub = `${stale ? "Stale" : "Updated"} · ${fmtDate(c.updatedAt)}`;
    return `
      <div class="item" data-id="${c.id}">
        <div class="item-top">
          <div class="row gap">${statusDot(c.status)}<div class="item-title">${c.name}</div></div>
          <div class="pill mini">${c.status || "—"}</div>
        </div>
        <div class="item-sub">${sub}</div>
      </div>
    `;
  }).join("");

  $$("#pamCustomerList .item").forEach(el=>{
    el.addEventListener("click", ()=>{
      selectedCustomerId = el.dataset.id;
      renderPAMEditor();
    });
  });
}

function renderChipRow(cust){
  const wrap = $("#pamChips");
  wrap.innerHTML = chipCatalog.map(t => {
    const active = (cust.tags||[]).includes(t);
    return `<span class="chip ${active ? "active":""}" data-tag="${t}">${t}</span>`;
  }).join("");
  $$("#pamChips .chip").forEach(ch=>{
    ch.addEventListener("click", ()=>{
      const tag = ch.dataset.tag;
      cust.tags = cust.tags || [];
      if(cust.tags.includes(tag)) cust.tags = cust.tags.filter(x=>x!==tag);
      else cust.tags.push(tag);
      ch.classList.toggle("active");
    });
  });
}

function renderPAMEditor(){
  const db = ensureDB();
  const cust = db.customers.find(c => c.id === selectedCustomerId);
  const has = !!cust;

  $("#pamEditor").classList.toggle("hidden", !has);
  $("#pamEmpty").classList.toggle("hidden", has);
  $("#btnSaveWeekly").classList.toggle("hidden", !has);
  $("#btnMarkNoChange").classList.toggle("hidden", !has);

  if(!cust){
    $("#pamEditorTitle").textContent = "Select a customer";
    $("#pamEditorSub").textContent = "Pick a customer to edit their weekly report.";
    return;
  }

  $("#pamEditorTitle").textContent = cust.name;
  $("#pamEditorSub").textContent = "Weekly report fields (keep old status valid if no change).";
  $("#pamLastUpdated").textContent = fmtDate(cust.updatedAt);

  // status buttons
  $$(".status-btn").forEach(b=>{
    b.classList.toggle("active", b.dataset.status === cust.status);
    b.onclick = ()=>{
      $$(".status-btn").forEach(x=>x.classList.remove("active"));
      b.classList.add("active");
      cust.status = b.dataset.status;
    };
  });

  $("#pamCommitments").value = cust.commitments || "";
  $("#pamRisks").value = cust.risks || "";
  $("#pamIncidents").value = cust.incidents || "";
  $("#pamEscalations").value = cust.escalations || "";
  $("#pamNotes").value = cust.notes || "";
  renderChipRow(cust);

  $("#btnMarkNoChange").onclick = ()=>{
    // only refresh updatedAt to indicate reviewed, without altering content
    cust.updatedAt = nowISO();
    save(db);
    $("#pamLastUpdated").textContent = fmtDate(cust.updatedAt);
    renderPAMList();
  };

  $("#btnSaveWeekly").onclick = ()=>{
    cust.commitments = $("#pamCommitments").value.trim();
    cust.risks = $("#pamRisks").value.trim();
    cust.incidents = $("#pamIncidents").value.trim();
    cust.escalations = $("#pamEscalations").value.trim();
    cust.notes = $("#pamNotes").value.trim();
    cust.updatedAt = nowISO();
    save(db);
    $("#pamLastUpdated").textContent = fmtDate(cust.updatedAt);
    renderPAMList();
  };
}

function renderMonthlyForm(){
  const db = ensureDB();
  const m = db.monthly || defaultMonthly();
  $("#mActiveCustomers").value = m.activeCustomers ?? 0;
  $("#mRevenueAtRisk").value = m.revenueAtRisk ?? 0;
  $("#mRenewals").value = m.renewals ?? "";
  $("#mObligations").value = m.obligations ?? "";
  $("#mRequests").value = m.requests ?? "";
  $("#mAvgTicketAge").value = m.avgTicketAge ?? 0;
  $("#mPredictability").value = m.predictability ?? "";
  $("#mScopeChanges").value = m.scopeChanges ?? "";
  $("#mCFIncidents").value = m.cfIncidents ?? "";
  $("#mAdoption").value = m.adoption ?? "";

  $("#btnSaveMonthly").onclick = ()=>{
    const db2 = ensureDB();
    db2.monthly = {
      activeCustomers: Number($("#mActiveCustomers").value||0),
      revenueAtRisk: Number($("#mRevenueAtRisk").value||0),
      renewals: $("#mRenewals").value.trim(),
      obligations: $("#mObligations").value.trim(),
      requests: $("#mRequests").value.trim(),
      avgTicketAge: Number($("#mAvgTicketAge").value||0),
      predictability: $("#mPredictability").value.trim(),
      scopeChanges: $("#mScopeChanges").value.trim(),
      cfIncidents: $("#mCFIncidents").value.trim(),
      adoption: $("#mAdoption").value.trim(),
    };
    save(db2);
    alert("Monthly rollup saved (mock).");
  };
}

function renderGM(){
  const db = ensureDB();

  // KPIs
  const total = db.customers.length;
  const greens = db.customers.filter(c=>c.status==="Green").length;
  const ambers = db.customers.filter(c=>c.status==="Amber").length;
  const reds = db.customers.filter(c=>c.status==="Red").length;
  const incidents = db.customers.filter(c=>(c.incidents||"").trim().length>0).length;

  $("#gmKpiCustomers").textContent = total.toString();
  $("#gmKpiHealth").textContent = `${greens} / ${ambers} / ${reds}`;
  $("#gmKpiRAR").textContent = moneyEUR(db.monthly?.revenueAtRisk ?? 0);
  $("#gmKpiIncidents").textContent = incidents.toString();

  // Lists
  const attention = db.customers
    .filter(c=>c.status==="Red" || (c.escalations||"").trim().length>0)
    .sort((a,b)=> (a.status==="Red" ? -1 : 1));
  const stale = db.customers.filter(c=> daysSince(c.updatedAt) > 7).sort((a,b)=> daysSince(b.updatedAt)-daysSince(a.updatedAt));
  const commercial = db.customers.filter(c=> (c.tags||[]).some(t=>["Renewal","Upsell","VIP"].includes(t))).slice(0,12);

  $("#gmAttention").innerHTML = renderGMList(attention, "Needs action");
  $("#gmStale").innerHTML = renderGMList(stale, "Stale");
  $("#gmCommercial").innerHTML = renderGMList(commercial, "Signal");

  // Table
  renderGMTable();
}

function renderGMList(items, label){
  if(items.length===0) return `<div class="item"><div class="item-title">Nothing flagged</div><div class="item-sub">All clear for this category.</div></div>`;
  return items.slice(0, 12).map(c=>{
    const stale = daysSince(c.updatedAt) > 7;
    const sub = `${label} · ${stale ? "Stale" : "Updated"} · ${fmtDate(c.updatedAt)}`;
    const tags = (c.tags||[]).slice(0,3).join(", ");
    return `
      <div class="item" data-id="${c.id}">
        <div class="item-top">
          <div class="row gap">${statusDot(c.status)}<div class="item-title">${c.name}</div></div>
          <div class="pill mini">${c.status || "—"}</div>
        </div>
        <div class="item-sub">${sub}${tags ? " · " + tags : ""}</div>
      </div>`;
  }).join("");
}

function gmFiltered(db){
  const q = ($("#gmSearch").value||"").toLowerCase().trim();
  const f = $("#gmFilterFresh").value;
  return db.customers
    .filter(c=>!q || c.name.toLowerCase().includes(q))
    .filter(c=>{
      if(!f) return true;
      const stale = daysSince(c.updatedAt) > 7;
      return (f==="stale") ? stale : !stale;
    })
    .sort((a,b)=>{
      const pr = (x)=> x.status==="Red" ? 0 : x.status==="Amber" ? 1 : 2;
      const d = pr(a)-pr(b);
      if(d!==0) return d;
      return a.name.localeCompare(b.name);
    });
}

function renderGMTable(){
  const db = ensureDB();
  const rows = gmFiltered(db);

  const tbody = $("#gmTable tbody");
  tbody.innerHTML = rows.map(c=>{
    const stale = daysSince(c.updatedAt) > 7;
    const risks = (c.risks||"").trim() ? "Yes" : "—";
    const inc = (c.incidents||"").trim() ? "Yes" : "—";
    const esc = (c.escalations||"").trim() ? "Yes" : "—";
    const tags = (c.tags||[]).slice(0,4).join(", ");
    return `
      <tr data-id="${c.id}">
        <td><div class="row gap">${statusDot(c.status)}<b>${c.name}</b></div></td>
        <td>${c.status}</td>
        <td>${stale ? `<span class="pill" style="border-color:rgba(251,191,36,.45)">Stale · ${daysSince(c.updatedAt)}d</span>` : fmtDate(c.updatedAt)}</td>
        <td>${risks}</td>
        <td>${inc}</td>
        <td>${esc}</td>
        <td>${tags || "—"}</td>
      </tr>
    `;
  }).join("");

  $$("#gmTable tbody tr").forEach(tr=>{
    tr.addEventListener("click", ()=>{
      const id = tr.dataset.id;
      openDrawer(id);
    });
  });

  // attach click handlers for list items too
  ["#gmAttention","#gmStale","#gmCommercial"].forEach(sel=>{
    $$(sel+" .item").forEach(el=>{
      el.addEventListener("click", ()=>{
        openDrawer(el.dataset.id);
      });
    });
  });
}

function openDrawer(id){
  const db = ensureDB();
  const c = db.customers.find(x=>x.id===id);
  if(!c) return;
  $("#gmDrawerTitle").textContent = c.name;
  $("#gmDrawerSub").textContent = `${c.status} · Updated ${fmtDate(c.updatedAt)}`;
  $("#gmDCommitments").textContent = (c.commitments||"—");
  $("#gmDRisks").textContent = (c.risks||"—");
  $("#gmDIncidents").textContent = (c.incidents||"—");
  $("#gmDEscalations").textContent = (c.escalations||"—");
  $("#gmDNotes").textContent = (c.notes||"—");
  $("#gmDrawer").classList.remove("hidden");
}

function closeDrawer(){
  $("#gmDrawer").classList.add("hidden");
}

function addCustomer(){
  const name = prompt("Customer name?");
  if(!name) return;
  const db = ensureDB();
  const c = {
    id: "c_" + Math.random().toString(16).slice(2),
    name: name.trim(),
    status: "Green",
    updatedAt: nowISO(),
    commitments: "",
    risks: "",
    incidents: "",
    escalations: "",
    notes: "",
    tags: []
  };
  db.customers.push(c);
  save(db);
  selectedCustomerId = c.id;
  renderPAM();
}

function exportJSON(){
  const db = ensureDB();
  const blob = new Blob([JSON.stringify(db, null, 2)], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "reporting-tool-mock-data.json";
  a.click();
  URL.revokeObjectURL(a.href);
}

function wire(){
  // Login buttons
  $("#loginPAM").addEventListener("click", ()=> setRole("PAM"));
  $("#loginGM").addEventListener("click", ()=> setRole("GM"));

  $("#seedData").addEventListener("click", ()=>{
    seed();
    alert("Seeded demo data.");
  });
  $("#resetData").addEventListener("click", ()=>{
    if(confirm("Reset demo data?")){ reset(); alert("Reset complete."); }
  });

  $("#btnSwitchRole").addEventListener("click", ()=>{
    setRole(role==="PAM" ? "GM" : "PAM");
  });

  // PAM controls
  $$(".seg-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      setPAMTab(btn.dataset.tab);
    });
  });

  $("#btnPAMNewCustomer").addEventListener("click", addCustomer);
  $("#pamSearch").addEventListener("input", renderPAMList);
  $("#pamFilterStatus").addEventListener("change", renderPAMList);

  // GM controls
  $("#gmSearch").addEventListener("input", ()=> { renderGMTable(); });
  $("#gmFilterFresh").addEventListener("change", ()=> { renderGMTable(); });

  $("#gmDrawerClose").addEventListener("click", closeDrawer);
  $("#gmDrawer").addEventListener("click", (e)=>{
    if(e.target.id === "gmDrawer") closeDrawer();
  });

  $("#gmExport").addEventListener("click", exportJSON);
}

wire();
