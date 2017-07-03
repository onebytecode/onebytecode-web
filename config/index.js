module.exports = () => {
  const config = {
    db: require('./db')()
  }
  return config
}
