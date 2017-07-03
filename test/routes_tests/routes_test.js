module.exports = (server, chai, should) => {

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

  })
}
