// Exercise 1: Function to return last item of array
let arrayOfStrings, arrayOfNumbers, arrayMixed;
arrayOfStrings = ["a", "b", "c"];
arrayOfNumbers = [1, 2, 3];
arrayMixed = ["a", 1, null, true, arrayOfNumbers, [4.5, 5.6]];

let checkarray
checkarray = function(some_array){
    $("#response").html(some_array[some_array.length - 1])
};

checkarray(arrayOfStrings)

// Excercise 2: Integer check
var numberquestion = parseInt(prompt("What's your number?"));
if(Number.isInteger(numberquestion)){
    $("#response").html("Your number is an integer");
  } else {
    $("#response").html("Your number is not an integer");
  }
