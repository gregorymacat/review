const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.send();
});

app.listen(PORT, () => {
  console.log(`App is now listening at http://localhost:${PORT}`);
});