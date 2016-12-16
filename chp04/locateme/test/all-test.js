describe('create url test', () => {
  it('should return proper url given lat and lon', () => {
    let lat = 11.111
    let lon = 22.222

    let url = createURL(lat, lon)

    expect(url).to.be.eql('http://maps.google.com?q=11.111,22.222')
  })

  it('should return proper url given lat and lon', () => {
    let lat = 21.111
    let lon = 32.222

    let url = createURL(lat, lon)

    expect(url).to.be.eql('http://maps.google.com?q=21.111,32.222')
  })

  it('should return empty string if latitude is undefined', () => {
    let lat = undefined
    let lon = 22.222

    let url = createURL(lat, lon)

    expect(url).to.be.eql('')
  })

  it('should return empty string if longitude is undefined', () => {
    let lat = 22.222
    let lon = undefined

    let url = createURL(lat, lon)

    expect(url).to.be.eql('')
  })
})

describe('set location test', () => {
  it('should set the URL into location of window', () => {
    let windowStub = {}
    let url = 'http://example.com'

    setLocation(windowStub, url)
    expect(windowStub.location).to.be.eql(url)
  })
})

describe('locate test', () => {
  it('should register handlers with get current positions', () => {
    // let original = navigator.geolocation.getCurrentPosition
    //
    // navigator.geolocation.getCurrentPosition = function (cb, err) {
    //   expect(cb).to.be.eql(onSuccess)
    //   expect(err).to.be.eql(onError)
    //   done()
    // }
    //
    // locate()
    // navigator.geolocation.getCurrentPosition = original
    let getCurrentPositionMock =
      sandbox.mock(navigator.geolocation)
        .expects('getCurrentPosition')
        .withArgs(onSuccess, onError)

    locate()

    getCurrentPositionMock.verify()
  })
})

describe('onError test', () => {
  it('should set the error DOM element', () => {
    let domElement = {innerHTML: ''}
    sandbox.stub(document, 'getElementById')
      .withArgs('error')
      .returns(domElement)

    let msg = "you're kidding"
    let positionError = {message: msg}

    onError(positionError)
    expect(domElement.innerHTML).to.be.eql(msg)
  })
})

describe('onSuccess test', () => {
  it('should call createURL with latitude and longitude', () => {
    let createURLSpy = sandbox.spy(window, 'createURL')

    let position = {coords: {latitude: 40.41, longitude: -105.55}}

    onSuccess(position)

    expect(createURLSpy).to.have.been.calledWith(40.41, -105.55)
  })

  it('it should call setLocationSpy with URL returned by createURL', () => {
    let url = 'http://example.com'

    sandbox.stub(window, 'createURL')
      .returns(url)

    let setLocationSpy = sandbox.spy(window, 'setLocation')

    let position = {coords: {latitude: 40.41, longitude: -105.55}}

    onSuccess(position)

    expect(setLocationSpy).to.have.been.calledWith(window, url)
  })
})
