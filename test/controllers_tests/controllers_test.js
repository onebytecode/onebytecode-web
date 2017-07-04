module.exports = (controller, chai, should) => {
  const { yardbirds }  =  controller
  console.log(controller);
  describe('yardbirds controller tests', () => {
    it('it should create yard bird', done => {
      yardbirds.create({
        id: '1',
        name: 'Nicolas'
      }, (err, res) => {
        res.should.be.a('object')
        res.id.should.be.equal(1)
        done()
      })
    })
    it('it should be true', done => {
      yardbirds.get({ id: 1 }, (err,res) => {
        res.should.be.a('object')
        res.name.should.be.equal('Nicolas')
        done()
      })
    })
    it('it should update yard bird', done => {
      yardbirds.update({ id: 1, secondName: 'Tesla' }, (err, res) => {
        res.should.be.a('object')
        done()
      })
    })
    it('it should destroy yard bird', done => {
      yardbirds.delete({ id: 1 }, (err,res) => {
        res.should.be.a('object')
        res.id.should.be.equal(1)
        res.secondName.should.be.equal('Tesla')
        done()
      })
    })
  })
}
