module.exports = () => {
  const { url }  =  require('../config')().db
  const mongoose  =  require('mongoose')
  const connection  =  mongoose.connect(url)
  const autoIncrement  =  require('mongoose-auto-increment').plugin
  mongoose.Promise  =  require('bluebird')
  connection.on('connected', () => {
    console.log(`Mongo connection established!`);
  })

  const models = {
    yardbirds: require('./yardbirds')(mongoose, autoIncrement)
  }
}
