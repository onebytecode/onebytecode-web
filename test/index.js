const chai  =  require('chai')
const chai_http  =  require('chai-http')
const should  =  chai.should()
const server  =  require('../server')
const controller = require('../controllers')()
chai.use(chai_http)

describe('Test', () => {
  describe('Routes tests', () => {
    require('./routes_tests')(server, chai, should)
  })
  describe('Controllers tests', () => {
    require('./controllers_tests')(controller, chai, should)
  })
})
