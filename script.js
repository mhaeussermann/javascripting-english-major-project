let turtlesWithSplinter, reversedTurtlesWithoutSplinter;
turtlesWithSplinter = ["Leonardo", "Donatello", "Raphael", "Michelangelo", "Splinter"];
// Use .filter() instead of .pop().
reversedTurtlesWithoutSplinter = turtlesWithSplinter.filter(function(turtle){
  // What is the value of turtle?
  console.log(turtle);
  return turtle !== "Splinter";
}).reverse().join(", ");
$("#response").html(reversedTurtlesWithoutSplinter);