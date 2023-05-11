var typewriter = document.getElementById("typewriter");
var typewriter2 = document.getAnimations("typewriter2");
var text2 = "tets";

// Define the text to be typed out
var text = "Hi there, I’m AInjera, the AI chatbot that knows everything about Ethiopian cuisine and culture. I’m happy to share my knowledge with you and answer any questions you might have. Whether you want to know how to prepare injera, the staple flatbread, or what are some of the most popular dishes and spices in Ethiopia, I’m here to help. I can also tell you about the history, geography, and traditions of this amazing country. Just type your question and I’ll try to give you a satisfying answer. Let’s have some fun! 😊";


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
