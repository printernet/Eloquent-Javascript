// http://eloquentjavascript.net/04_data.html#p_iPlgVCeZGh
// return value of nth node of linked list (recursive)

function nth(list, num){
  if(list == null) return;
  return num == 0 ? list.value : nth(list.rest, num - 1);
}