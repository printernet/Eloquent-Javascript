// http://eloquentjavascript.net/04_data.html#p_0GiJNcBSop
// sum the numbers of an array

function sum(arr){
	var res=0;
  	for(var n in arr){
    	res+=arr[n];
    }
return res;
}