module.exports = (db, chai, should) => {
  describe('Database connection tests', () => {
    it('it should get status connected', done => {
      db.connect.then((success) => {
        success.should.be.a('object')
        success.status.should.be.equal('connected')
        done()
      }, (err) => {
        err.should.be.a('object')
        done()
      })
    })
  })
}
