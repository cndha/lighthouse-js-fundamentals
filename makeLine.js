function makeLine(length) {
  var line = '';
  for (var j = 1; j <= length; j++) {
    line += '* ';
  }
  return line + '\n';
}

function buildTriangle(length) {
  var triangle = '';
  var lineNum = 1;
  for (lineNum = 1; lineNum <= length; lineNum++) {
    triangle = triangle + makeLine(lineNum);
  }
  return triangle;
}
console.log(buildTriangle(10));


var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}
console.log(helloCat(catSays));
