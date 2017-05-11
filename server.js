// var app = require('express')(),
//     port = 8080,
//     bodyParser = require('body-parser'),
var app = require('express')()
var port  = 8080
var bodyParser = require('body-parser')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})
app.get('/*', (req, res) => {
  console.log('Starting ' + req.url)
  res.sendFile(__dirname + req.url)
})
app.get('/bower_components/*', function (req, res) {
  console.log('Starting ' + req.url)
  res.sendFile(__dirname + req.url)
})
app.get('/scripts/*', function (req, res) {
  console.log('Starting ' + req.url)
  res.sendFile(__dirname + req.url)
})
app.listen(port, function () {
  console.log('[------ NODEJS APP RUNNING ON :8080 ------]')
})

module.exports = app
