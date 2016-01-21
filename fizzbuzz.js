// Your code here. for fizzbuzz exercise
var sentence = "";
var counter = 1;
for (counter ; counter <= 100 ; counter++){
  if (counter == 1)
    sentence = 1;
  else if (counter % 3 === 0 && counter % 5 !== 0)
    sentence += ", Fizz";
  else if (counter % 5 === 0 && counter % 3 !== 0)
    sentence += ", Buzz";
  else if (counter % 5 === 0 && counter % 3 === 0)
    sentence += ", FizzBuzz";
  else
    sentence += ", " + counter;
}

console.log(sentence);