let fs = require('fs')

let linesCount = (fileName, callback, onError) => {
  let processFile = (err, data) => {
    if (err)
      onError('unable to open file ' + fileName)
    else
      callback(data.toString().split('\n').length)

  }
  fs.readFile(fileName, processFile)
}

module.exports = linesCount
