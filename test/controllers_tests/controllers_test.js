module.exports = (controller, chai, should) => {
  const { yardbirds }  =  controller
  describe('yardbirds controller tests', () => {
    it('it should create yard bird', done => {
      yardbirds.create({
        id: '1',
        name: 'Nicolas'
      }).should.not.be.epmty()
      done()
    })
  })
}
