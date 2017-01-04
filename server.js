const events = require('./mockDataEvents');

const express = require('express');
const app = express();

app.use(express.static('./build'));

app.get('/', (req, res) => {
  res.sendFile('./build/index.html');
});

app.get('/events', (req, res) => {
  res.json(events);
});

app.listen(3000, () => {
  console.log('server is up and running');
});
