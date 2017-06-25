
var app = require('express')()
var port  = 8080
var bodyParser = require('body-parser')
let ENV = process.env.NODE_ENV || 'production'


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})
app.get('/main.js', function(req, res) {
  res.sendFile(__dirname + '/public/assets' + req._parsedUrl.pathname)
})
app.get('/*', function(req, res) {
  console.log('Starting ' + req.url)
  res.sendFile(__dirname + req.url)
})
app.listen(port, function () {
  console.log(` ------- Application running on ::8080 --------\n ------- NODE ENV ${ENV} -------`);
})

module.exports = app
