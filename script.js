

// The text to be typed
var text = "Hi there, I’m AInjera, the AI chatbot that knows everything about Ethiopian cuisine and culture. I’m happy to share my knowledge with you and answer any questions you might have. Whether you want to know how to prepare injera, the staple flatbread, or what are some of the most popular dishes and spices in Ethiopia, I’m here to help. I can also tell you about the history, geography, and traditions of this amazing country. Just type your question and I’ll try to give you a satisfying answer. Let’s have some fun! 😊";

// The element where the text will be displayed
var typewriter = document.getElementById("typewriter");

// The index of the current character
var index = 0;

// The speed of typing in milliseconds
var speed = 30;

// A counter to keep track of how many conversations have been started
var count = 0;

// A flag to indicate if the chatbot should ask more questions
var askMore = true;

// The function that types one character at a time
function type() {
  // If the index is less than the length of the text
  if (index < text.length) {
    // Append the current character to the typewriter element
    typewriter.innerHTML += text.charAt(index);
    // Increment the index
    index++;
    // Call the type function again after a delay
    setTimeout(type, speed);
  } else {
    // If the index is equal to the length of the text
    // If the chatbot should ask more questions and the counter is less than 3
    if (askMore && count < 3) {
      // Wait for 3 seconds and then start a new conversation
      setTimeout(newConversation, 3000);
    }
  }
}

// The function that starts a new conversation
function newConversation() {
  // Reset the index
  index = 0;
  // Increment the counter
  count++;
  // Change the text to a new one based on the counter
  switch (count) {
    case 1:
      text =  "What are some of your hobbies?";
      break;
    case 2:
      text = "What kind of music do you like?";
      break;
    case 3:
      text = "Where do you live?";
      // Set the flag to false so that no more questions are asked
      askMore = false;
      break;
    default:
      text = "";
      break;
  }
  
  // Add a line break to the typewriter element
  typewriter.innerHTML += "<br>";
  
  // Call the type function again
  type();
}

// Call the type function when the page loads
window.onload = type;