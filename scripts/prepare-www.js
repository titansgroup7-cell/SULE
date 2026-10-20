/**
 * Creates a minimal www/ folder for Capacitor.
 * The real UI loads from server.url (hosted Flask app).
 */
const fs = require('fs');
const path = require('path');

const www = path.join(__dirname, '..', 'www');
if (!fs.existsSync(www)) fs.mkdirSync(www, { recursive: true });

const html = `<!DOCTYPE html>
<html lang="sw">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="theme-color" content="#f56b00" />
  <title>SULE BUSINESS</title>
  <style>
    body { margin:0; font-family: system-ui, sans-serif; background:#f56b00; color:#fff;
           display:flex; align-items:center; justify-content:center; min-height:100vh; text-align:center; }
    .box { padding:24px; }
    h1 { font-size:22px; margin:0 0 8px; }
    p { opacity:.9; font-size:14px; }
  </style>
</head>
<body>
  <div class="box">
    <h1>SULE BUSINESS</h1>
    <p>Inapakia...</p>
  </div>
  <script>
    // Capacitor loads remote server.url; this page is fallback only.
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(www, 'index.html'), html);
console.log('www/ ready');
