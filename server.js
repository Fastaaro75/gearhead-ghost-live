const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

const PORT = parseInt(process.env.PORT, 10) || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
