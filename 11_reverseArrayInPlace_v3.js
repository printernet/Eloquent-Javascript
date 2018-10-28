// http://eloquentjavascript.net/04_data.html#p_0ysB6LgssH
// reverse an array in place

// shorter code using array.slice() to clone array and then just
// iterate through the array and .pop() the items from temp 

function reverseArrayInPlace(array) {
  var temp = array.slice();
  for (var item in array) array[item] = temp.pop();
}