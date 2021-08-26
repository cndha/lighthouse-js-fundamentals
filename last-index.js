
function lastIndexOf (array, value) {
  var output = false;
  var result = 0;
  for (var i = array.length-1; i >=0; i--) {
    if (array[i] === value) {
      result = i;
     output = true;
      break;
    }
  }
  if  (output) {
    return result;
  } else {
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 0));