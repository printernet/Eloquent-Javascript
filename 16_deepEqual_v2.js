// http://eloquentjavascript.net/04_data.html#h_IJBU+aXOIC
// recursive deep object literal comparison function

// Notes:
// another attempt to rewrite deepEqual() by memory
// removed redundancies
// the final return ternary solves the problem of testing the
// values of any object property
// ARGH, this still doesnt work on nested object literals
// anything after a nested object literal isn't tested

function deepEqual(a,b){

  var counta = 0; var countb = 0;
  if(typeof a == "object" &&
     typeof b == "object" &&
     a != null 			  &&
     b != null) {
        for(var prop in a)
          counta ++;
        for(var prop in b)
          countb ++;
        if (counta != countb) return false;

        for(var prop in a)
          return deepEqual(a[prop],b[prop]);
  }else
    //console.log(a,b);
    return (a === b) ? true : false;
}