// http://eloquentjavascript.net/03_functions.html#h_jxl1p970Fy

function isEven(n) {
	if(n == 2) return true;
  if(n == 1) return false;
  return n>0 ? isEven(n-2) : isEven(n+2);
}