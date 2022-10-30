// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  console.log('input', json);

  if (json === '[]') {
    return [];
  } else if (json.includes('{' && '}')) {
    var array = json.split(':');
    var object = {};
    for (var i = 1; i < array.length - 1; i + 2) {
      object.array[i] = array[i + 1];
    }

    return object;

  }

};
//I - stringified JSON
//O - Original type of object
//C - none
//E - If the input is an invalid stringified JSON, throw the syntax error
