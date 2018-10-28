// http://eloquentjavascript.net/02_program_structure.html#h_rebKE3gdjV

// Print numbers 1-100,
// for numbers divisible by 3 print "Fizz"
// for numbers divisible by 5 print "Buzz"
// for numbers divisible by both print "FizzBuzz"

for (var num = 1; num < 101; num++) {
  if (num % 5 == 0 && num % 3 == 0) {
    console.log("FizzBuzz");
    continue;
  } else if (num % 5 == 0 && !num % 3 == 0)
      console.log("Buzz");
    else if (num % 3 == 0 && !num % 5 == 0)
      console.log("Fizz");
    else console.log(num);
}
