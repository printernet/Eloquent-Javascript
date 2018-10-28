// http://eloquentjavascript.net/04_data.html#p_iPlgVCeZGh
// transform an array into a linked list object

function arrayToList(arr){
  for(var i=arr.length - 1, list={}; i >= 0; i--)
    list = { value: arr[i], rest: list };
  return list;
}