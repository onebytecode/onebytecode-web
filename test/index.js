const server = require('../server')
const chai = require('chai')
const chai_http = require('chai-http')
const should = chai.should()
chai.use(chai_http)

describe('Tests', () => {
  describe('routes tests', () => {
    require('./routes_tests')(server, chai, should)
  })
})
