module.exports = () => {

  const { autoIncrement, mongoose }  =  require('../db')()

  const models = {
    yardbirds: getYardbirds(mongoose, autoIncrement.plugin)
  }
  return models
}

const getYardbirds = (mongoose, plugin) => {
  return require('./yardbirds')(mongoose, plugin)
}
