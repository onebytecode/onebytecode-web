'use strict'
const app = require('express')()
const port  = 8080
const bodyParser = require('body-parser')
const ENV = process.env.NODE_ENV || 'production'
const compression = require('compression')
const morgan  =  require('morgan')

app.use(bodyParser.json());
app.use(morgan('dev'))
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
  res.sendFile(__dirname + req.url)
})
app.listen(port, function () {
  console.log(` ------- Application running on ::8080 --------\n ------- NODE ENV ${ENV} -------`);
})

module.exports = app
