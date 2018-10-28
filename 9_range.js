// http://eloquentjavascript.net/04_data.html#p_PkFb/61ecP
// return range of numbers as array

// start: int, end: int, step: int
function range(start, end, step) {
  if (!step) step = 1;
  if (end < start) step = -1;
  var res = [];
  if (step < 0) {
    for (var i = start; i >= end; i += step) res.push(i);
  } else {
    for (var i = start; i <= end; i += step) res.push(i);
  }
  return res;
}
