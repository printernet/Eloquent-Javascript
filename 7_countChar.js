// http://eloquentjavascript.net/03_functions.html#h_3rsiDgC2do

function countChar(str, hit) {
  var count = 0;
  var i = str.length;
  while (i--)
  	if (str.charAt(i) == hit) count++;
  return count;
}