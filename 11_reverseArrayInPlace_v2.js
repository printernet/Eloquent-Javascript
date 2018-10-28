// http://eloquentjavascript.net/04_data.html#p_0ysB6LgssH
// reverse an array in place

function reverseArrayInPlace(array) {
  var len = array.length;
  var middle = len % 2 == 0 ? len / 2 : len / 2 - 0.5;
  for (var e in array) {
    if (e == middle) break;
    var swap = array[len - e - 1];
    array[len - e - 1] = array[e];
    array[e] = swap;
  }
}