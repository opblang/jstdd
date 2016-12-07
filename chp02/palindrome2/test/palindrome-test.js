describe('palindrome-test', () => {
  // canary test
  it('should pass this canary test', () => {
    expect(true).to.be.true
  })

  // positive test
  it('should return true for argument mom', () => {
    let word = 'mom'
    let result = isPalindrome(word)
    expect(result).to.be.true
  })

  it('should return true for argument dad', () => {
    let word = 'dad'
    let result = isPalindrome(word)
    expect(result).to.be.true
  })

  it('should return true for argument mom mom', () => {
    let word = 'mom mom'
    let result = isPalindrome(word)
    expect(result).to.be.true
  })

  // negative test
  it('should return false when argument is an empty string', () => {
    let word = ''
    let result = isPalindrome(word)
    expect(result).to.be.false
  })

  it('should return false for argument with only spaces', () => {
    let word = ' '
    let result = isPalindrome(word)
    expect(result).to.be.false
  })

  it('should return false for multi space argument', () => {
    let word = '     '
    let result = isPalindrome(word)
    expect(result).to.be.false
  })

  it('should return false for argument dude', () => {
    let word = 'dude'
    let result = isPalindrome(word)
    expect(result).to.be.false
  })

  it('should return false for argument mom dad', () => {
    let word = 'mom dad'
    let result = isPalindrome(word)
    expect(result).to.be.false
  })

  // exception test
  it('should throw exception if argument is missing', () => {
    let call = () => {
      isPalindrome()
    }
    expect(call).to.throw(Error, 'Invalid argument')
  })
})
