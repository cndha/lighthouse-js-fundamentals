function merge(array1, array2) {
  var output = array1.concat(array2);
  return output.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));