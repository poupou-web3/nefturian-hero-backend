const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const getId = (address) => {
    const number = parseInt(address, 16);
    const quotient = Math.floor(number / 1240);
    return quotient;
  };

app.get('/id/:address', (req, res) => {
  const { address } = req.params;
  const id = getId(address);
  res.json({ id });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
