const chai       =  require('chai')
const chai_http  =  require('chai-http')
const server     =  require('../server')
const controller =  require('../controllers')()
const db         =  require('../db')()
const should     =  chai.should()
chai.use(chai_http)

describe('Test', () => {
    describe('Routes tests', () => {
      require('./routes_tests')(server, chai, should)
    })
    describe('Controllers tests', () => {
      require('./controllers_tests')(controller, chai, should)
    })
    describe('Database tests', () => {
      require('./db_tests')(db, chai, should)
    })
})
