// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var body = document.body;
  var result = [];

  var getElement = function(element) {
    var children = element.childNodes;

    if (element.classList.contains(className)) {
      result.push(element);
    }
    children.forEach(function(child, index, allChildren) {
      if (child.classList) {
        getElement(child);
      }
    });

  };
  getElement(body);
  return result;
};
