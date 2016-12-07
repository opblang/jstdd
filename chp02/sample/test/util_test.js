let expect = require('chai').expect
let Util = require('../src/util')

describe('util test', () => {
  it('should pass this canary test', () => {
    expect(true).to.eql(true)
  })
})

let util

beforeEach(() => {
  util = new Util()
})

it('should pass if f2c return 0C for 32F', () => {
  let fahrenheit = 32
  let celcius = util.f2c(fahrenheit)

  expect(celcius).to.eql(0)
})


it('should pass if f2c return 10C for 50F', () => {
  let fahrenheit = 32
  let celcius = util.f2c(fahrenheit)

  expect(celcius).to.eql(50)
})
