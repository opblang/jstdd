function createURL(lat, lon) {
  if (lat && lon)
    return 'http://maps.google.com?q=' + lat + ',' + lon
  return ''
}

function setLocation(window, url) {
  window.location = url
}

function locate() {
  navigator.geolocation.getCurrentPosition(onSuccess, onError)
}

var onSuccess = function (position) {
  var lat = position.coords.latitude
  var lon = position.coords.longitude

  var url = createURL(lat, lon)
  setLocation(window, url)
}

var onError = function (error) {
  document.getElementById('error').innerHTML = error.message
}

