let i;
i = 1;
while(i < 4) {
    if (i % 2 == 0 ) {
        $("#response").append("<br />" + i + " is odd")
      } else {
        $("#response").append("<br />" + i + " is even");
      }
    i = i + 1;
}

let tipCalculator;
tipCalculator = function(total, tipRate){
  // 1. Calculate the percentage of the total 
  // as a variable “tipAmount”
  let tipAmount;
  if (tipRate <= 100 && tipRate >= 1){
    var tipRate
    tipRate = tipRate * 0.01;
  }
  tipAmount = tipRate * total;
  // 2. Change #response to tell us the tip
  // amount.
  $("#response").html("Your tip is $" + tipAmount);
} 

tipCalculator(50.00, 20);