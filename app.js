const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const getId = (address) => {
    const number = parseInt(address, 16);
    const remainder = number % 1240;
    return remainder;
  };

app.get('/id/:address', (req, res) => {
  const { address } = req.params;
  const id = getId(address);
  res.json({ id });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
