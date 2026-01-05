# PizzaHub

A small client-side project that provides a simple Pizza ordering/search UI.

**Features**
- Lightweight HTML/JS app — no build step required.
- Uses `lib/query.js` for query/helper functions.

**Files**
- ph.html — main HTML interface.
- ph.js — application JavaScript.
- lib/query.js — helper/query utilities.

**Prerequisites**
- A modern web browser.
- (Optional) A static file server for local development.

**Quick Start**
1. Open `ph.html` directly in a browser, or serve the folder and visit the page.

To serve with Python's simple server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/ph.html
```

**Development**
- Edit `ph.js` and `lib/query.js` to modify behavior.
- No build tools required; refresh the browser to see changes.

**Mock API (for testing)**

If you want the frontend to talk to a local fake API (recommended for development), a small Express mock server is included.

Installation and run:

```bash
npm init -y
npm install express
node mock-server.js
# mock server listens on http://localhost:3000
```

Then open `ph.html` (or serve the folder) — the frontend's `lib/query.js` calls `http://localhost:3000/...` by default.

Notes:
- The mock server implements `/api/pizzahub`, `/api/pizzahub/pizzas/:shopId`, `/api/pizzahub/beverages/:pizzaId`, and `POST /api/order`.
- If you prefer not to install Node, run the frontend against a real API or adapt `lib/query.js` to use relative paths.

