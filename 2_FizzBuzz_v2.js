// http://eloquentjavascript.net/02_program_structure.html#h_rebKE3gdjV

// Print numbers 1-100,
// for numbers divisible by 3 print "Fizz"
// for numbers divisible by 5 print "Buzz"
// for numbers divisible by both print "FizzBuzz"

for (var num = 1; num < 101; num++) {
  var word = "";
  if (num % 3 == 0 || num % 5 == 0) {
    if (num % 3 == 0) word += "Fizz";
    if (num % 5 == 0) word += "Buzz";
    console.log(word);
  } else console.log(num);
}