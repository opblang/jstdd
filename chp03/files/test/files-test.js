let expect = require('chai').expect
let linesCount = require('../src/files')

describe('test server-side callback', () => {
  // canary
  it('shoud pass this canary test', () => {
    expect(true).to.be.true
  })

  // positive
  it('should  return correct lines count for a valid file', (done) => {
    let callback = count => {
      expect(count).to.be.eql(15)
      done()
    }
    linesCount('src/files.js', callback)
  })
  
  // negative
  it('it should report error for an invalid file name', (done) => {
    let onError = (err) => {
      expect(err).to.be.eql('unable to open file src/flies.js')
      done()
    }
    linesCount('src/flies.js', undefined, onError)
  })
})
