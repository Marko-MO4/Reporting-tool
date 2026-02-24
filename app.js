// ExecView – UI Mock (no backend)
// Data stored in localStorage to simulate persistence for demos.

const KEY = "execview_mock_v2";
const SEED = {"clients": [{"id": "c_0_9340", "name": "Aurelius Bank Group", "manager": "Alex", "status": "Red", "updatedAt": "2026-02-22T10:30:00", "commitments": "• Patch deployment by 2026-03-01\n• Migration plan v2 by 2026-03-20", "risks": "• Commercial: renewal at risk due to perceived value / SLA breach\n• Delivery: dependency on cross-team capacity\n• Operational: support load above baseline", "incidents": "• Sev2 incident: API timeouts (2026-02-15)", "escalations": "Decision needed: prioritize hotfix vs roadmap feature.", "notes": "Weekly focus: proactive communication and reducing open items.", "tags": ["Upsell", "Adoption", "Compliance", "Incident", "Renewal"], "kpis": {"activeUsersPerMonth": 45, "ticketBacklogRate": 10, "onTimeUpdateRate": 80, "renewalProbability": 65}, "revenueAtRisk": 120000}, {"id": "c_1_3831", "name": "Helios Energy Systems", "manager": "Jamie", "status": "Amber", "updatedAt": "2026-02-21T10:30:00", "commitments": "• Q1 roadmap review 2026-03-05\n• KPI baseline report 2026-03-12", "risks": "• Scope: change requests increasing without contract update\n• Delivery: milestones slipping on one stream", "incidents": "", "escalations": "", "notes": "Weekly focus: proactive communication and reducing open items.", "tags": ["Roadmap", "Backlog", "Renewal"], "kpis": {"activeUsersPerMonth": null, "ticketBacklogRate": 15, "onTimeUpdateRate": 95, "renewalProbability": 85}, "revenueAtRisk": 60000}, {"id": "c_2_6924", "name": "NovaCare Health Network", "manager": "Taylor", "status": "Red", "updatedAt": "2026-02-08T10:30:00", "commitments": "• Deliver sprint release by 2026-03-08\n• Customer workshop 2026-03-15", "risks": "• Commercial: renewal at risk due to perceived value / SLA breach\n• Delivery: dependency on cross-team capacity\n• Operational: support load above baseline", "incidents": "", "escalations": "Commercial support: join renewal steering call.", "notes": "Weekly focus: proactive communication and reducing open items.", "tags": ["Upsell", "VIP", "Incident"], "kpis": {"activeUsersPerMonth": 0, "ticketBacklogRate": 30, "onTimeUpdateRate": 95, "renewalProbability": null}, "revenueAtRisk": 250000}, {"id": "c_3_7376", "name": "Vertex Logistics International", "manager": "Alex", "status": "Amber", "updatedAt": "2026-02-19T10:30:00", "commitments": "• Patch deployment by 2026-03-01\n• Migration plan v2 by 2026-03-20", "risks": "• Scope: change requests increasing without contract update\n• Delivery: milestones slipping on one stream", "incidents": "• Sev2 incident: Auth errors (2026-02-21)", "escalations": "", "notes": "Account stable. Push adoption and prepare next-quarter roadmap.", "tags": ["Scope", "Incident", "Upsell", "Renewal"], "kpis": {"activeUsersPerMonth": 0, "ticketBacklogRate": 15, "onTimeUpdateRate": 95, "renewalProbability": 65}, "revenueAtRisk": 110000}, {"id": "c_4_6034", "name": "Quantum Retail Holdings", "manager": "Jamie", "status": "Green", "updatedAt": "2026-02-12T10:30:00", "commitments": "• Q1 roadmap review 2026-03-05\n• KPI baseline report 2026-03-12", "risks": "• Low risk: maintain adoption momentum and roadmap alignment", "incidents": "", "escalations": "", "notes": "Weekly focus: proactive communication and reducing open items.", "tags": ["Support", "Incident", "Roadmap"], "kpis": {"activeUsersPerMonth": 0, "ticketBacklogRate": 10, "onTimeUpdateRate": 95, "renewalProbability": null}, "revenueAtRisk": 25000}, {"id": "c_5_8620", "name": "NimbusTel Europe", "manager": "Sam", "status": "Green", "updatedAt": "2026-02-16T10:30:00", "commitments": "• Patch deployment by 2026-03-01\n• Migration plan v2 by 2026-03-20", "risks": "• Low risk: maintain adoption momentum and roadmap alignment", "incidents": "", "escalations": "", "notes": "Weekly focus: proactive communication and reducing open items.", "tags": ["Delivery", "Upsell", "Renewal"], "kpis": {"activeUsersPerMonth": 120, "ticketBacklogRate": 15, "onTimeUpdateRate": 90, "renewalProbability": 55}, "revenueAtRisk": 0}, {"id": "c_6_3050", "name": "Orion Aerospace Components", "manager": "Sam", "status": "Red", "updatedAt": "2026-02-12T10:30:00", "commitments": "• Deliver sprint release by 2026-03-08\n• Customer workshop 2026-03-15", "risks": "• Commercial: renewal at risk due to perceived value / SLA breach\n• Delivery: dependency on cross-team capacity\n• Operational: support load above baseline", "incidents": "", "escalations": "Commercial support: join renewal steering call.", "notes": "Account stable. Push adoption and prepare next-quarter roadmap.", "tags": ["VIP", "Upsell", "Incident", "Renewal"], "kpis": {"activeUsersPerMonth": 120, "ticketBacklogRate": 35, "onTimeUpdateRate": 70, "renewalProbability": 85}, "revenueAtRisk": 320000}, {"id": "c_7_6080", "name": "Stonebridge Insurance", "manager": "Taylor", "status": "Red", "updatedAt": "2026-02-12T10:30:00", "commitments": "• Patch deployment by 2026-03-01\n• Migration plan v2 by 2026-03-20", "risks": "• Commercial: renewal at risk due to perceived value / SLA breach\n• Delivery: dependency on cross-team capacity\n• Operational: support load above baseline", "incidents": "", "escalations": "Commercial support: join renewal steering call.", "notes": "Key stakeholder engaged; ensure delivery predictability.", "tags": ["Scope", "Integration", "Support", "Upsell", "Incident"], "kpis": {"activeUsersPerMonth": 0, "ticketBacklogRate": 35, "onTimeUpdateRate": 90, "renewalProbability": null}, "revenueAtRisk": 180000}, {"id": "c_8_2959", "name": "BluePeak Construction", "manager": "Taylor", "status": "Green", "updatedAt": "2026-02-22T10:30:00", "commitments": "• Q1 roadmap review 2026-03-05\n• KPI baseline report 2026-03-12", "risks": "• Low risk: maintain adoption momentum and roadmap alignment", "incidents": "", "escalations": "", "notes": "Account stable. Push adoption and prepare next-quarter roadmap.", "tags": ["Integration", "Backlog", "Incident", "Renewal"], "kpis": {"activeUsersPerMonth": 80, "ticketBacklogRate": 45, "onTimeUpdateRate": 90, "renewalProbability": 65}, "revenueAtRisk": 0}, {"id": "c_9_3190", "name": "Evergreen Public Sector", "manager": "Jamie", "status": "Amber", "updatedAt": "2026-02-16T10:30:00", "commitments": "• Deliver sprint release by 2026-03-08\n• Customer workshop 2026-03-15", "risks": "• Scope: change requests increasing without contract update\n• Delivery: milestones slipping on one stream", "incidents": "", "escalations": "Decision needed: prioritize hotfix vs roadmap feature.", "notes": "Account stable. Push adoption and prepare next-quarter roadmap.", "tags": ["Incident", "Support", "Upsell"], "kpis": {"activeUsersPerMonth": 120, "ticketBacklogRate": 45, "onTimeUpdateRate": 80, "renewalProbability": null}, "revenueAtRisk": 95000}, {"id": "c_10_6467", "name": "Kestrel Manufacturing", "manager": "Sam", "status": "Red", "updatedAt": "2026-02-12T10:30:00", "commitments": "• Patch deployment by 2026-03-01\n• Migration plan v2 by 2026-03-20", "risks": "• Commercial: renewal at risk due to perceived value / SLA breach\n• Delivery: dependency on cross-team capacity\n• Operational: support load above baseline", "incidents": "• Sev2 incident: API timeouts (2026-02-18)", "escalations": "Decision needed: prioritize hotfix vs roadmap feature.", "notes": "Account stable. Push adoption and prepare next-quarter roadmap.", "tags": ["VIP", "Backlog", "Upsell", "Incident", "Renewal"], "kpis": {"activeUsersPerMonth": 120, "ticketBacklogRate": 30, "onTimeUpdateRate": 90, "renewalProbability": 55}, "revenueAtRisk": 180000}, {"id": "c_11_9094", "name": "Lumen Media Group", "manager": "Alex", "status": "Amber", "updatedAt": "2026-02-19T10:30:00", "commitments": "• Q1 roadmap review 2026-03-05\n• KPI baseline report 2026-03-12", "risks": "• Scope: change requests increasing without contract update\n• Delivery: milestones slipping on one stream", "incidents": "• Sev3 incident: Auth errors (2026-02-10)", "escalations": "", "notes": "Weekly focus: proactive communication and reducing open items.", "tags": ["Scope", "Renewal", "Adoption"], "kpis": {"activeUsersPerMonth": null, "ticketBacklogRate": 30, "onTimeUpdateRate": 70, "renewalProbability": 65}, "revenueAtRisk": 110000}, {"id": "c_12_6853", "name": "PolarGrid Utilities", "manager": "Taylor", "status": "Red", "updatedAt": "2026-02-04T10:30:00", "commitments": "• Deliver sprint release by 2026-03-08\n• Customer workshop 2026-03-15", "risks": "• Commercial: renewal at risk due to perceived value / SLA breach\n• Delivery: dependency on cross-team capacity\n• Operational: support load above baseline", "incidents": "", "escalations": "Decision needed: prioritize hotfix vs roadmap feature.", "notes": "Weekly focus: proactive communication and reducing open items.", "tags": ["Adoption", "Renewal", "Incident"], "kpis": {"activeUsersPerMonth": 120, "ticketBacklogRate": 35, "onTimeUpdateRate": 95, "renewalProbability": 65}, "revenueAtRisk": 250000}, {"id": "c_13_2149", "name": "Crescent Mobility", "manager": "Taylor", "status": "Green", "updatedAt": "2026-02-19T10:30:00", "commitments": "• Q1 roadmap review 2026-03-05\n• KPI baseline report 2026-03-12", "risks": "• Low risk: maintain adoption momentum and roadmap alignment", "incidents": "", "escalations": "", "notes": "Account stable. Push adoption and prepare next-quarter roadmap.", "tags": ["Incident", "Adoption", "Backlog", "Compliance"], "kpis": {"activeUsersPerMonth": 0, "ticketBacklogRate": 45, "onTimeUpdateRate": 85, "renewalProbability": null}, "revenueAtRisk": 25000}, {"id": "c_14_8902", "name": "Atlas Pharma", "manager": "Alex", "status": "Green", "updatedAt": "2026-02-16T10:30:00", "commitments": "• Deliver sprint release by 2026-03-08\n• Customer workshop 2026-03-15", "risks": "• Low risk: maintain adoption momentum and roadmap alignment", "incidents": "", "escalations": "", "notes": "Weekly focus: proactive communication and reducing open items.", "tags": ["Renewal", "Backlog", "Support", "Compliance"], "kpis": {"activeUsersPerMonth": 45, "ticketBacklogRate": 35, "onTimeUpdateRate": 70, "renewalProbability": 85}, "revenueAtRisk": 0}, {"id": "c_15_5585", "name": "Mariner Shipping Lines", "manager": "Taylor", "status": "Amber", "updatedAt": "2026-02-12T10:30:00", "commitments": "• Patch deployment by 2026-03-01\n• Migration plan v2 by 2026-03-20", "risks": "• Scope: change requests increasing without contract update\n• Delivery: milestones slipping on one stream", "incidents": "• Sev3 incident: Reporting mismatch (2026-02-18)", "escalations": "Decision needed: prioritize hotfix vs roadmap feature.", "notes": "Weekly focus: proactive communication and reducing open items.", "tags": ["Support", "Renewal", "Incident", "Roadmap"], "kpis": {"activeUsersPerMonth": 45, "ticketBacklogRate": 10, "onTimeUpdateRate": 80, "renewalProbability": 55}, "revenueAtRisk": 95000}, {"id": "c_16_2980", "name": "CopperTree FinTech", "manager": "Sam", "status": "Green", "updatedAt": "2026-02-08T10:30:00", "commitments": "• Deliver sprint release by 2026-03-08\n• Customer workshop 2026-03-15", "risks": "• Low risk: maintain adoption momentum and roadmap alignment", "incidents": "", "escalations": "", "notes": "Key stakeholder engaged; ensure delivery predictability.", "tags": ["Compliance", "Upsell", "Integration", "VIP"], "kpis": {"activeUsersPerMonth": null, "ticketBacklogRate": 10, "onTimeUpdateRate": 80, "renewalProbability": null}, "revenueAtRisk": 0}, {"id": "c_17_5110", "name": "Saffron Hospitality", "manager": "Sam", "status": "Green", "updatedAt": "2026-02-22T10:30:00", "commitments": "• Q1 roadmap review 2026-03-05\n• KPI baseline report 2026-03-12", "risks": "• Low risk: maintain adoption momentum and roadmap alignment", "incidents": "", "escalations": "", "notes": "Key stakeholder engaged; ensure delivery predictability.", "tags": ["Incident", "Adoption"], "kpis": {"activeUsersPerMonth": 80, "ticketBacklogRate": 30, "onTimeUpdateRate": 95, "renewalProbability": null}, "revenueAtRisk": 25000}, {"id": "c_18_8705", "name": "BrightForge Cybersecurity", "manager": "Sam", "status": "Green", "updatedAt": "2026-02-08T10:30:00", "commitments": "• Q1 roadmap review 2026-03-05\n• KPI baseline report 2026-03-12", "risks": "• Low risk: maintain adoption momentum and roadmap alignment", "incidents": "", "escalations": "", "notes": "Key stakeholder engaged; ensure delivery predictability.", "tags": ["Incident", "Adoption", "Delivery", "Upsell", "Renewal"], "kpis": {"activeUsersPerMonth": 520, "ticketBacklogRate": 35, "onTimeUpdateRate": 90, "renewalProbability": 65}, "revenueAtRisk": 25000}, {"id": "c_19_5740", "name": "TerraNova Agriculture", "manager": "Jamie", "status": "Green", "updatedAt": "2026-02-08T10:30:00", "commitments": "• Q1 roadmap review 2026-03-05\n• KPI baseline report 2026-03-12", "risks": "• Low risk: maintain adoption momentum and roadmap alignment", "incidents": "", "escalations": "", "notes": "Key stakeholder engaged; ensure delivery predictability.", "tags": ["VIP", "Roadmap", "Scope", "Renewal"], "kpis": {"activeUsersPerMonth": 120, "ticketBacklogRate": 15, "onTimeUpdateRate": 90, "renewalProbability": 55}, "revenueAtRisk": 0}], "monthly": {"revenueAtRisk": 1870000, "renewals": "4 renewals (next quarter), 2 upsell opportunities", "obligations": "• SLA reviews for VIP clients\n• Quarterly security and compliance deliverables", "requests": "P0: 2, P1: 8, P2: 19", "avgTicketAge": 21, "predictability": "84% on-time", "scopeChanges": "Requested: 11 · Approved: 6", "cfIncidents": "This month: 4 clients impacted (1x Sev2, 3x Sev3)", "adoption": "Usage up in 9 accounts; flat in 6; down in 2."}, "meta": {"appName": "ExecView", "version": 2}};

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
    if(!raw) return null;
    return JSON.parse(raw);
  }catch(e){ return null; }
}
function save(db){ localStorage.setItem(KEY, JSON.stringify(db)); }

function ensureDB(){
  const db = load();
  if(db) return db;
  const fresh = structuredClone(SEED);
  save(fresh);
  return fresh;
}

function seed(){
  const fresh = structuredClone(SEED);
  // always re-seed with a new "now" for realism
  save(fresh);
}
function reset(){ localStorage.removeItem(KEY); }

let role = null; // "PAM" or "GM"
let selectedClientId = null;
const chipCatalog = ["Renewal","Upsell","Backlog","Incident","Delivery","Scope","Adoption","VIP","Roadmap","Support","Compliance","Integration"];

function showView(id){
  ["viewLogin","viewPAM","viewGM"].forEach(v => $("#"+v).classList.add("hidden"));
  $("#"+id).classList.remove("hidden");
}

function setRole(r){
  role = r;
  $("#userBadge").classList.remove("hidden");
  $("#btnSwitchRole").classList.remove("hidden");
  $("#userBadge").textContent = (r === "PAM") ? "Role: Project/Account Manager" : "Role: General Manager";
  showView(r === "PAM" ? "viewPAM" : "viewGM");
  if(r === "PAM") renderPAM();
  else renderGM();
}

function statusDot(status){
  const s = (status||"").toLowerCase();
  const cls = (s==="green") ? "green" : (s==="amber") ? "amber" : (s==="red") ? "red" : "gray";
  return `<span class="dot ${cls}"></span>`;
}

function setPAMTab(tab){
  window.__pamTab = tab;
  $$(".seg-btn").forEach(b => b.classList.toggle("active", b.dataset.tab===tab));
  $("#pamMonthly").classList.toggle("hidden", tab !== "monthly");
}

function filteredClients(db){
  const q = ($("#pamSearch").value||"").toLowerCase().trim();
  const f = $("#pamFilterStatus").value;
  return db.clients
    .filter(c => !q || c.name.toLowerCase().includes(q))
    .filter(c => !f || c.status===f)
    .sort((a,b)=> a.name.localeCompare(b.name));
}

function renderPAM(){
  const db = ensureDB();
  setPAMTab(window.__pamTab || "clients");
  renderPAMList();
  renderPAMEditor();
  renderMonthlyForm();
}

function renderPAMList(){
  const db = ensureDB();
  const list = $("#pamClientList");
  const items = filteredClients(db);

  if(items.length===0){
    list.innerHTML = `<div class="item"><div class="item-title">No clients</div><div class="item-sub">Add one to start reporting.</div></div>`;
    return;
  }

  list.innerHTML = items.map(c => {
    const stale = daysSince(c.updatedAt) > 7;
    const sub = `${c.manager} · ${stale ? "Stale" : "Updated"} · ${fmtDate(c.updatedAt)}`;
    return `
      <div class="item" data-id="${c.id}">
        <div class="item-top">
          <div class="row gap">${statusDot(c.status)}<div class="item-title">${c.name}</div></div>
          <div class="pill mini">${c.status}</div>
        </div>
        <div class="item-sub">${sub}</div>
      </div>
    `;
  }).join("");

  $$("#pamClientList .item").forEach(el=>{
    el.addEventListener("click", ()=>{
      selectedClientId = el.dataset.id;
      renderPAMEditor();
    });
  });
}

function renderChipRow(client){
  const wrap = $("#pamChips");
  wrap.innerHTML = chipCatalog.map(t => {
    const active = (client.tags||[]).includes(t);
    return `<span class="chip ${active ? "active":""}" data-tag="${t}">${t}</span>`;
  }).join("");
  $$("#pamChips .chip").forEach(ch=>{
    ch.addEventListener("click", ()=>{
      const tag = ch.dataset.tag;
      client.tags = client.tags || [];
      if(client.tags.includes(tag)) client.tags = client.tags.filter(x=>x!==tag);
      else client.tags.push(tag);
      ch.classList.toggle("active");
    });
  });
}

function renderPAMEditor(){
  const db = ensureDB();
  const client = db.clients.find(c => c.id === selectedClientId);
  const has = !!client;

  $("#pamEditor").classList.toggle("hidden", !has);
  $("#pamEmpty").classList.toggle("hidden", has);
  $("#btnSaveWeekly").classList.toggle("hidden", !has);
  $("#btnMarkNoChange").classList.toggle("hidden", !has);

  if(!client){
    $("#pamEditorTitle").textContent = "Select a client";
    $("#pamEditorSub").textContent = "Pick a client to edit their weekly report.";
    return;
  }

  $("#pamEditorTitle").textContent = client.name;
  $("#pamEditorSub").textContent = `Owner: ${client.manager} · Weekly report fields`;
  $("#pamLastUpdated").textContent = fmtDate(client.updatedAt);

  $$(".status-btn").forEach(b=>{
    b.classList.toggle("active", b.dataset.status === client.status);
    b.onclick = ()=>{
      $$(".status-btn").forEach(x=>x.classList.remove("active"));
      b.classList.add("active");
      client.status = b.dataset.status;
    };
  });

  $("#pamCommitments").value = client.commitments || "";
  $("#pamRisks").value = client.risks || "";
  $("#pamIncidents").value = client.incidents || "";
  $("#pamEscalations").value = client.escalations || "";
  $("#pamNotes").value = client.notes || "";
  renderChipRow(client);

  $("#btnMarkNoChange").onclick = ()=>{
    client.updatedAt = nowISO();
    save(db);
    $("#pamLastUpdated").textContent = fmtDate(client.updatedAt);
    renderPAMList();
  };

  $("#btnSaveWeekly").onclick = ()=>{
    client.commitments = $("#pamCommitments").value.trim();
    client.risks = $("#pamRisks").value.trim();
    client.incidents = $("#pamIncidents").value.trim();
    client.escalations = $("#pamEscalations").value.trim();
    client.notes = $("#pamNotes").value.trim();
    client.updatedAt = nowISO();
    save(db);
    $("#pamLastUpdated").textContent = fmtDate(client.updatedAt);
    renderPAMList();
  };
}

function renderMonthlyForm(){
  const db = ensureDB();
  const m = db.monthly || {};

  $("#mActiveClients").value = m.activeClients ?? db.clients.length;
  $("#mRevenueAtRisk").value = m.revenueAtRisk ?? db.clients.reduce((a,c)=>a+(c.revenueAtRisk||0),0);
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
      activeClients: Number($("#mActiveClients").value||0),
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

function gmFiltered(db){
  const q = ($("#gmSearch").value||"").toLowerCase().trim();
  const f = $("#gmFilterFresh").value;
  return db.clients
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

function renderGM(){
  const db = ensureDB();

  const total = db.clients.length;
  const greens = db.clients.filter(c=>c.status==="Green").length;
  const ambers = db.clients.filter(c=>c.status==="Amber").length;
  const reds = db.clients.filter(c=>c.status==="Red").length;
  const incidents = db.clients.filter(c=>(c.incidents||"").trim().length>0).length;
  const rar = (db.monthly?.revenueAtRisk ?? db.clients.reduce((a,c)=>a+(c.revenueAtRisk||0),0));

  $("#gmKpiClients").textContent = total.toString();
  $("#gmKpiHealth").textContent = `${greens} / ${ambers} / ${reds}`;
  $("#gmKpiRAR").textContent = moneyEUR(rar);
  $("#gmKpiIncidents").textContent = incidents.toString();

  const attention = db.clients
    .filter(c=>c.status==="Red" || (c.escalations||"").trim().length>0)
    .sort((a,b)=> (a.status==="Red" ? -1 : 1));
  const stale = db.clients.filter(c=> daysSince(c.updatedAt) > 7).sort((a,b)=> daysSince(b.updatedAt)-daysSince(a.updatedAt));
  const commercial = db.clients.filter(c=> (c.tags||[]).some(t=>["Renewal","Upsell","VIP"].includes(t))).slice(0,12);

  $("#gmAttention").innerHTML = renderGMList(attention, "Action");
  $("#gmStale").innerHTML = renderGMList(stale, "Stale");
  $("#gmCommercial").innerHTML = renderGMList(commercial, "Signal");

  renderGMTable();
}

function renderGMList(items, label){
  if(items.length===0) return `<div class="item"><div class="item-title">Nothing flagged</div><div class="item-sub">All clear for this category.</div></div>`;
  return items.slice(0, 12).map(c=>{
    const stale = daysSince(c.updatedAt) > 7;
    const tags = (c.tags||[]).slice(0,3).join(", ");
    const sub = `${c.manager} · ${label} · ${stale ? "Stale" : "Updated"} · ${fmtDate(c.updatedAt)}${tags ? " · " + tags : ""}`;
    return `
      <div class="item" data-id="${c.id}">
        <div class="item-top">
          <div class="row gap">${statusDot(c.status)}<div class="item-title">${c.name}</div></div>
          <div class="pill mini">${c.status}</div>
        </div>
        <div class="item-sub">${sub}</div>
      </div>`;
  }).join("");
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
        <td><div class="row gap">${statusDot(c.status)}<b>${c.name}</b><span class="pill mini">${c.manager}</span></div></td>
        <td>${c.status}</td>
        <td>${stale ? `<span class="pill" style="border-color:rgba(251,191,36,.45)">Stale · ${daysSince(c.updatedAt)}d</span>` : fmtDate(c.updatedAt)}</td>
        <td>${moneyEUR(c.revenueAtRisk || 0)}</td>
        <td>${risks}</td>
        <td>${inc}</td>
        <td>${esc}</td>
        <td>${tags || "—"}</td>
      </tr>
    `;
  }).join("");

  $$("#gmTable tbody tr").forEach(tr=>{
    tr.addEventListener("click", ()=> openDrawer(tr.dataset.id));
  });

  ["#gmAttention","#gmStale","#gmCommercial"].forEach(sel=>{
    $$(sel+" .item").forEach(el=>{
      el.addEventListener("click", ()=> openDrawer(el.dataset.id));
    });
  });
}

function openDrawer(id){
  const db = ensureDB();
  const c = db.clients.find(x=>x.id===id);
  if(!c) return;
  $("#gmDrawerTitle").textContent = c.name;
  $("#gmDrawerSub").textContent = `${c.status} · Owner ${c.manager} · Updated ${fmtDate(c.updatedAt)}`;

  $("#gmDCommitments").textContent = (c.commitments||"—");
  $("#gmDRisks").textContent = (c.risks||"—");
  $("#gmDIncidents").textContent = (c.incidents||"—");
  $("#gmDEscalations").textContent = (c.escalations||"—");
  $("#gmDNotes").textContent = (c.notes||"—");

  const sig = [];
  if(c.revenueAtRisk) sig.push(`Revenue at risk: ${moneyEUR(c.revenueAtRisk)}`);
  if(c.kpis?.activeUsersPerMonth != null) sig.push(`Active users/mo: ${c.kpis.activeUsersPerMonth}`);
  if(c.kpis?.ticketBacklogRate != null) sig.push(`Ticket quality → backlog rate: ${c.kpis.ticketBacklogRate}%`);
  if(c.kpis?.onTimeUpdateRate != null) sig.push(`On-time comms rate: ${c.kpis.onTimeUpdateRate}%`);
  if(c.kpis?.renewalProbability != null) sig.push(`Renewal probability: ${c.kpis.renewalProbability}%`);
  sig.push(`Tags: ${(c.tags||[]).join(", ") || "—"}`);
  $("#gmDSignals").textContent = sig.join("\n");

  $("#gmDrawer").classList.remove("hidden");
}

function closeDrawer(){ $("#gmDrawer").classList.add("hidden"); }

function addClient(){
  const name = prompt("Client name?");
  if(!name) return;
  const db = ensureDB();
  const c = {
    id: "c_new_" + Math.random().toString(16).slice(2),
    name: name.trim(),
    manager: "Alex",
    status: "Green",
    updatedAt: nowISO(),
    commitments: "",
    risks: "",
    incidents: "",
    escalations: "",
    notes: "",
    tags: [],
    revenueAtRisk: 0,
    kpis: { activeUsersPerMonth: null, ticketBacklogRate: 0, onTimeUpdateRate: 0, renewalProbability: null }
  };
  db.clients.push(c);
  save(db);
  selectedClientId = c.id;
  renderPAM();
}

function exportJSON(){
  const db = ensureDB();
  const blob = new Blob([JSON.stringify(db, null, 2)], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "execview-mock-data.json";
  a.click();
  URL.revokeObjectURL(a.href);
}

function wire(){
  $("#loginPAM").addEventListener("click", ()=> setRole("PAM"));
  $("#loginGM").addEventListener("click", ()=> setRole("GM"));

  $("#seedData").addEventListener("click", ()=>{ seed(); alert("Seeded demo data."); });
  $("#resetData").addEventListener("click", ()=>{ if(confirm("Reset demo data?")){ reset(); alert("Reset complete."); } });

  $("#btnSwitchRole").addEventListener("click", ()=> setRole(role==="PAM" ? "GM" : "PAM"));

  $$(".seg-btn").forEach(btn=> btn.addEventListener("click", ()=> setPAMTab(btn.dataset.tab)));

  $("#btnPAMNewClient").addEventListener("click", addClient);
  $("#pamSearch").addEventListener("input", renderPAMList);
  $("#pamFilterStatus").addEventListener("change", renderPAMList);

  $("#gmSearch").addEventListener("input", ()=> renderGMTable());
  $("#gmFilterFresh").addEventListener("change", ()=> renderGMTable());

  $("#gmDrawerClose").addEventListener("click", closeDrawer);
  $("#gmDrawer").addEventListener("click", (e)=>{ if(e.target.id === "gmDrawer") closeDrawer(); });

  $("#gmExport").addEventListener("click", exportJSON);
}

wire();
