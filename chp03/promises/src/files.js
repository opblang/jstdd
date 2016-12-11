let fs = require('fs-promise')

module.exports = (fileName) => {
  let onSuccess = (data) =>
    Promise.resolve(data.toString().split('\n').length)

  let onError = (err) =>
    Promise.reject(new Error('unable to open file ' + fileName))

  return fs.readFile(fileName)
    .then(onSuccess)
    .catch(onError)
}
