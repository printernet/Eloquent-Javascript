// http://eloquentjavascript.net/04_data.html#h_IJBU+aXOIC
// recursive deep object literal comparison function

// Notes:
// nested function was used to solve logic
// issues surrounding nested object literals

function deepEqual(a,b){
  var ret = true;
  function objLoop(a,b){
	var counta = 0, countb = 0;
    if(typeof a == "object" &&
       typeof b == "object" &&
       a != null 			  &&
       b != null) {
          for(var prop in a)
            counta ++;
          for(var prop in b)
            countb ++;
          ret = (counta == countb && ret != false) ? true : false;
	  if(!ret) return;
      	  for(var prop in a)
            objLoop(a[prop],b[prop]);
   	 }else
     	ret = (a === b && ret != false) ? true : false;
   }
   objLoop(a,b);
   return ret;
}