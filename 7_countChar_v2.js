// http://eloquentjavascript.net/03_functions.html#h_3rsiDgC2do

function countChar(str, char) {
  for (var i = 0, j = 0; i < str.length; i++) {
    if (str.charAt(i) == char) j++;
  }
  return j;
}