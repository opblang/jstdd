module.exports = (word) => {
  if (word === undefined)
    throw new Error('Invalid argument')

  return word.trim().length > 0 && word.split('').reverse().join('') === word
}

