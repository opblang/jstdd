describe('fetch location test', () => {
  // canary test
  it('should pass cannary test', () => {
    expect(true).to.be.true
  })

  // positive test
  it('should get lat and lon from fetchLocation', function(done) {
    let onSuccess = (location) => {
      expect(location).to.have.property('lat')
      expect(location).to.have.property('lon')
      done()
    }

    let onError = (err) => {
      throw 'not expected'
    }

    this.timeout(10000)

    fetchLocation(onSuccess, onError)
  })
})
