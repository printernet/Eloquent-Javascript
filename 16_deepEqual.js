// http://eloquentjavascript.net/04_data.html#h_IJBU+aXOIC
// recursive deep object literal comparison function

// Notes:
// function works for the given tests in the book but
// breaks when object literal contains more than 2 nested
// object literals

function deepEqual(obj1, obj2) {
var count1=0;
var count2=0;
if (typeof obj1 == "object"
    && obj1 != null
    && typeof obj2 == "object"
    && obj2 != null)
  	var isobj=true;

 	if(!isobj)
   		if(obj1 === obj2) return true;
      	else return false;
 	else {

		for(var prop in obj1)
			count1++;
		for(var prop in obj2)
			count2++;
   		if (count1 == count2){

    		for(var prop in obj1)
       		   	if (!obj2[prop])
                  	return false;
      	  		else
            		return deepEqual(obj1[prop], obj2[prop]);
    	}
    }
}