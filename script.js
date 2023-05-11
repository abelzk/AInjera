 // Get the typewriter element
 var typewriter = document.getElementById("typewriter");

 // Define the text to be typed out
 var text = "Hello, I'm AInjera. 🤖 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi quasi laudantium incidunt saepe? Ea, ipsam fugit tempore consequuntur ducimus magnam quo inventore similique mollitia, dolorum veritatis dicta explicabo nequew!  can help you with various tasks and topics.";

 // Define the typing speed in milliseconds
 var speed = 30;

 // Define a variable to store the current index of the text
 var index = 0;

 // Define a function to type out one character at a time
 function type() {
   // If the index is less than the length of the text
   if (index < text.length) {
     // Append the next character to the typewriter element
    var char = text[index];
// add the character to the end of the innerHTML
typewriter.innerHTML = typewriter.innerHTML + char;
     // Increment the index by one
     index++;
     // Call the type function again after a delay
     setTimeout(type, speed);
   } else {
     // If the index is equal to the length of the text, start blinking the cursor
     blink();
   }
 } 

 // Define a function to blink the cursor periodically
 function blink() {
   // Toggle the visibility of the border-right property
   typewriter.style.borderRight = typewriter.style.borderRight ? "" : "0.15em solid #00be894";
   // Call the blink function again after a delay
   setTimeout(blink, 500);
 }

 // Call the type function to start the typewriter effect
 type();