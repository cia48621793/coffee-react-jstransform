var visitors = require('react-tools/vendor/fbtransform/visitors')
var transform = require('jstransform').transform

module.exports = function (input, options) {
  var visitorList
  if (options == null) {
    options = {es6: true, react: true}
  }
  visitorList = visitors.getVisitorsBySet(['react', 'harmony'])
  return transform(visitorList, input, options).code
}
