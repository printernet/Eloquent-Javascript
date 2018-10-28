// http://eloquentjavascript.net/04_data.html#p_0ysB6LgssH
// return reversed array

function reverseArray(arr)
{
  for (var i=arr.length - 1, ret=[]; i >= 0; i--)
    ret.push(arr[i]);
  return ret;
}