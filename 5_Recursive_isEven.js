// http://eloquentjavascript.net/03_functions.html#h_jxl1p970Fy

function isEven (n) {
	if (n == 2 || n == 0) return true;
	if (n == 1) return false;
	if (n < 0) return isEven (n+2);
	if (n > 0) return isEven (n-2);
}