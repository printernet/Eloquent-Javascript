// http://eloquentjavascript.net/04_data.html#p_iPlgVCeZGh
// transform an array into a linked list object

// 2-17-17 arrayToList was supposed to return
// rest: null at last nested list
// this one fixed

function arrayToList(arr){
  for(var i = arr.length - 1, list = null; i >= 0; i--){
  	list = { value: arr[i], rest: list }
  }
return list;
}