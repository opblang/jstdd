let locate = () => {
  navigator.geolocation.getCurrentPosition(position => {
    let lat = position.coords.latitude
    let lon = position.coords.longitude
    let url = `https://maps.google.com/?q= ${lat}, ${lon}`
    window.location = url
  }, () => document.getElementById('error').innerHTML = 'unnable to get your location')
}
