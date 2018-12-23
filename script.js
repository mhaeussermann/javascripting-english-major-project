// Exercise 1
array_number = [2, 4, 6];
let number_squared;
number_squared = array_number.map(function(number){
  return number*2;
}).join(", ");
$("#response").html(number_squared);

// Exercise 2
let leonardo, donatello, raphael, michelangelo, turtles, weapons;
leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
donatello = {name: "Donatello", color: "purple", weapon: "bo"};
raphael = {name: "Raphael", color: "red", weapon: "sai"};
michelangelo = {name: "Michelangelo", color: "blue", weapon: "nunchaku"};
turtles = [leonardo, donatello, raphael, michelangelo, mate];
weapons = turtles.map(function(turtle){
  return turtle.weapon;
}).sort();
weapons = weapons.slice(0, -1).join(', ') + ', and ' + weapons.slice(-1)
// weapons is now "bo, katana, nunchaku, sai". Sorted, with commas.
$("#response").html(weapons);