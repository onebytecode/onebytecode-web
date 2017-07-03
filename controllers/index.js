module.exports = () => {
  const controllers = {
    yardbirds: require('./yardbirds')()
  }

  return controllers
}
