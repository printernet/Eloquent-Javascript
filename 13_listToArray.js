// http://eloquentjavascript.net/04_data.html#p_iPlgVCeZGh
// transform a linked list object into an array

function listToArray(list){
	for(var node = list, arr = []; node; node = node.rest)
		if(node.value)
      arr.push(node.value);
  return arr;
}