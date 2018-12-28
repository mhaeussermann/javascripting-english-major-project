$("#prologue").html("<p>The text of the Prologue will go here.</p>");
$("#glosses").html("<p>The glosses will go here.</p>");
let line1, line1Text; // don’t need the intermediate step of line1TextArray
line1 = [{text: "Whan", modern: "When"}, {text: "that"}, {text: "Aprill,",
        modern: "April,"}, {text: "with"}, {text: "his"}, {text: "shoures",
        modern: "showers"}, {text: "soote", modern: "sweet"}]; 
// Create a blank string that opens two tags.
line1Text = "<blockquote><p>";
line1.forEach(function(word){
    // Define a variable that will be the entirety of a single
    // word-sized chunk of information.
    let wordString;
    wordString = word.text;
    // Test to see if the .modern property exists.
    if (word.modern){
      // If it does, surround wordString in an <a> tag.
      wordString = "<a href='#'>" + wordString + "</a>";
    }
    // Add wordString plus a space to the line1Text.
    line1Text += wordString + " ";
  });
// Break the line and close the two tags.
line1Text += "<br />(line 2 would go here)</p></blockquote>";
$("#prologue").html(line1Text);