'use strict'
let app = require('express')()
let port  = 8080
let bodyParser = require('body-parser')
let ENV = process.env.NODE_ENV || 'production'
let compression = require('compression')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));
app.use(compression())

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})
app.get('/main.js', function(req, res) {
  res.sendFile(__dirname + '/public/assets' + req._parsedUrl.pathname)
})
app.get('/main.js.gz', (req, res) => {
  res.setHeader("Content-Encoding","gzip")
  res.sendFile(__dirname + '/public/assets' + req._parsedUrl.pathname)
})
app.get('/*', function(req, res) {
  console.log('Starting ' + req.url)
  console.log(req.headers);
  res.sendFile(__dirname + req.url)
})
app.listen(port, function () {
  console.log(` ------- Application running on ::8080 --------\n ------- NODE ENV ${ENV} -------`);
})

module.exports = app
