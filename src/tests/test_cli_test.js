const {suite, test, assert} = require('driven-test')

var setuped = false
var tearDownCalled = false
var beforeCalls = 0
var afterCalls = 0
var beforeCalled = false
var afterCalled = false

suite('Simple test to pass in CI', () => {
  test('1 + 1', () => assert.equal(1 + 1, 2)) 
})
