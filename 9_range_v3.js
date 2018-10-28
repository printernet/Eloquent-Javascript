// http://eloquentjavascript.net/04_data.html#p_PkFb/61ecP
// return range of numbers as array

// a: int - required - start of range
// b: int - required - end of range
// step: int - optional - default=1 - interval to count by
// range: array - optional - append output to existing array

function range(a,b,step,range = []) {
  var step = step ? Math.abs(step) : 1;
  var stop = a > b ? "a >= b" : "a <= b";
  for(step = a > b ? -step : +step; eval(stop); a += step)
    range.push(a);
  return range;
}

