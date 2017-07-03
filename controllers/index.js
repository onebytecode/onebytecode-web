module.exports = () => {
  const { YardBird }  =  require('../models')().yardbirds
  const controllers = {
    yardbirds: require('./yardbirds')(YardBird)
  }

  return controllers
}
