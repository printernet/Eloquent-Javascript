// http://eloquentjavascript.net/04_data.html#p_0ysB6LgssH
// reverse an array in place

// swap from ends to middle using temporary variable

function reverseArrayInPlace(array) {
  for (var left = 0, right = array.length - 1; left < Math.floor(array.length / 2); left++) {
    var swap = array[left];
    array[left] = array[right];
    array[right] = swap;
    right--;
  }
}