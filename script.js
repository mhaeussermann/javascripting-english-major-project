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
