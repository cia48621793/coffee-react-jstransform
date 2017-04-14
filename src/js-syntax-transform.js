var jsSyntaxTransform, transform, visitors;

visitors = require('react-tools/vendor/fbtransform/visitors');

transform = require('jstransform').transform;

jsSyntaxTransform = function(input, options) {
  var visitorList;
  if (options == null) {
    options = {};
  }
  visitorList = visitors.getVisitorsBySet(['react']);
  return transform(visitorList, input, options).code;
};

module.exports = jsSyntaxTransform;
