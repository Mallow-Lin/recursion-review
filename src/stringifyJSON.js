// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // I - obj
  // O - string version of the obj
  // C - converts to JSON string
  // E
  if (typeof(obj) === 'number') {
    return obj.toString();
  } else if (obj === null) {
    return 'null';
  } else if (typeof(obj) === 'boolean') {
    return obj.toString();
  } else if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj) === true) {
    if (obj.length === 0) {
      return '[]';
    } else {
      var result = '';
      obj.forEach(function(element, index, collection) {
        result = result.concat(',', stringifyJSON(element));
      });
    }
    var returnSlice = result.slice(1);
    return '[' + returnSlice + ']';
  } else if (typeof(obj) === 'object') {
    if (obj === undefined) {
      return '{}';
    } else {
      var result = '';
      _.each(obj, function(value, key, obj) {
        result = result.concat(stringifyJSON(key) + ':' + stringifyJSON(value));
      });
    }
    return '{' + result + '}';
  }
};