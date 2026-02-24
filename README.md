# Reporting Tool – UI Mock-up (no backend)

This repo is a **clickable interface mock-up** for a web-based reporting tool:
- **Project/Account Manager (PAM)**: fast weekly per-customer updates + monthly rollup.
- **General Manager (GM)**: one-glance dashboard + drill-down.

## Run
Open `index.html` in a browser.

If your browser blocks local JS features when opened via `file://`, run a local server:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Demo tips
1. Click **Seed demo data**.
2. Login as **PAM**, update a customer (status / risks / incidents / commitments).
3. Click **Switch role** and view the aggregated impact in **GM** dashboard.

## What this mock demonstrates
- Per-customer weekly reporting designed to take ~5 minutes
- Status remains valid if unchanged; “Mark no change” refreshes timestamp
- GM dashboard shows health distribution, stale updates, attention needed, and drill-down

## Next step (future)
In production, replace localStorage with an internal API + SQL database on a company server (VPN-accessible).
