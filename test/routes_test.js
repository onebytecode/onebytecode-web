var server = require('../server')
var chai = require('chai')
var chai_http = require('chai-http')
var should = chai.should()

chai.use(chai_http)

describe('/GET', function () {
  it('it should get main page', function (done) {
    chai.request(server)
      .get('/')
      .end(function (err, res) {
          res.should.have.status(200)
        done()
      })
  })
  it('it should get application js', function (done) {
    chai.request(server)
      .get('/scripts/application.js')
      .end(function (err, res) {
          res.should.have.status(200)
          res.body.should.be.a('object');
        done()
      })
  })
  it('it should get jquery js', function (done) {
    chai.request(server)
      .get('/bower_components/jquery/dist/jquery.min.js')
      .end(function (err, res) {
          res.should.have.status(200)
          res.body.should.be.a('object');
        done()
      })
  })
  it('it should get jquery-ui js', function (done) {
    chai.request(server)
      .get('/bower_components/jquery-ui/jquery-ui.min.js')
      .end(function (err, res) {
          res.should.have.status(200)
          res.body.should.be.a('object');
        done()
      })
  })
})
