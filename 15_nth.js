// http://eloquentjavascript.net/04_data.html#p_iPlgVCeZGh
// return value of nth node of linked list

function nth(list, num){
	for(var count = 0; list; list = list.rest){
		if(count == num) return list.value;
  	count++;
	}
}