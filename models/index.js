module.exports = () => {
  const { url }  =  require('../config')().db
  const mongoose  =  require('mongoose')
  const autoIncrement  =  require('mongoose-auto-increment')
  const connection  =  mongoose.connection
  autoIncrement.initialize(connection)
  mongoose.connect(url)
  mongoose.Promise  =  require('bluebird')
  connection.on('error', console.error.bind(console, 'connection error:'));
  connection.once('open', function(callback) {
      console.log("connection to db open")
  });

  const models = {
    yardbirds: require('./yardbirds')(mongoose, autoIncrement.plugin)
  }
  return models
}
