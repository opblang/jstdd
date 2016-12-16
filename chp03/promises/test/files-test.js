require('chai').use(require('chai-as-promised'))

let expect = require('chai').expect
let linesCount = require('../src/files')

describe('test promise', () => {
  // positive test
  it('it should return correct lines count for a valid file', () => {
    let checkCount = (count) => {
      expect(count).to.be.eql(14)
    }
    return linesCount('src/files.js')
      .then(checkCount)
  })

  it('it should return correct lines count for a valid file', (done) => {
    let checkCount = (count) => {
      expect(count).to.be.eql(14)
      done()
    }

    linesCount('src/files.js')
      .then(checkCount)
  })

  it('should return correct lines count - using eventually', () => {
   return expect(linesCount('src/files.js')).to.eventually.eql(14)
  })

  it('should return correct lines count - using no return', (done) => {
    expect(linesCount('src/files.js')).to.eventually.eql(14).notify(done)
  })

  // negative test
  it('should report error for an invalid file name', (done) => {
   expect(linesCount('src/flies.js')).to.be.rejected.notify(done)
  })

})
