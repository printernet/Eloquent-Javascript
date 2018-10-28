// http://eloquentjavascript.net/04_data.html#p_PkFb/61ecP
// return range of numbers as array

// start: int, end: int, step: int
function range(a, b, step) {
  if ((step < 0 && a < b) || (step > 0 && a > b)) return;
  var ret = [];
  if (a < b) {
    while (a <= b) {
      ret.push(a);
      !step ? a++ : (a += step);
    }
  } else {
    while (a >= b) {
      ret.push(a);
      !step ? a-- : (a += step);
    }
  }
  return ret;
}