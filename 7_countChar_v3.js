// http://eloquentjavascript.net/03_functions.html#h_3rsiDgC2do

function countChar(str, char) {
  var j = 0, i = str.length;
  while (i--) if (str.charAt(i) == char) j++;
  return j;
}