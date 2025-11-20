const express = require('express');
const path = require('path');
const app = express();
const PORT = 3030;

// Path ke folder build Angular
const distFolder = path.join(__dirname, 'dist', 'voltaic-ai', 'browser');

// Serve file statis
app.use(express.static(distFolder));

// Fallback: handle semua route selain file statis (SPA)
app.get('/', (req, res) => {
  res.sendFile(path.join(distFolder, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Voltaic Angular app running on http://localhost:${PORT}`);
});
