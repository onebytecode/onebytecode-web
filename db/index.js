const { url }     =  require('../config')().db
const mongoose    =  require('mongoose')
const connection  =  mongoose.connection
const Promise     =  require('bluebird')
const autoIncrement  =  require('mongoose-auto-increment')
autoIncrement.initialize(connection)
mongoose.Promise  = Promise

module.exports  =  () => {
  const db = {
    connect: connectDb,
    mongoose: mongoose,
    autoIncrement: autoIncrement
  }
  return db
}

const connectDb  =  new Promise((resolve, reject) => {
  if (connection.readyState === 1) return resolve({ status:'connected', connection: connection, err:undefined })
  mongoose.connect(url)
  connection.on('error', (err) => {
    reject({ status: 'error', connection: connection, err: err })
  })
  connection.once('open', () => {
    resolve({ status: 'connected', connection: connection, err: undefined })
  })
})
