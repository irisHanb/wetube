const express = require('express');
const app = express();
const PORT = 4000;

function handleListening(req, res) {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send('hello');
}
function handleProfile(req, res) {
  res.send('hello my profile');
}

app.get('/', handleHome);
app.get('/profile', handleProfile);

app.listen(PORT, handleListening);
