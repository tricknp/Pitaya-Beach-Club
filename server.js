const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const port = process.env.PORT || 5000
const app = express()

app.use(serveStatic(path.join(__dirname, 'dist')))

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
})

// auto-ping
const URL = 'http://pitaya-beach-club.herokuapp.com/';
const http = require("http");
setInterval(function () {
  console.log('[auto-ping ...]');
  http.get(URL);
}, 300000);

app.get(URL, (req, res) => {
  console.log('[auto-ping received]');
  res.status(200);
});

// start server
app.listen(port, () => {
  console.log('server on: [localhost:' + port + '] ')
})
