// The text to be typed
var text =
  "Hi there, I’m AInjera, the AI chatbot that knows everything about Ethiopian cuisine and culture. I’m happy to share my knowledge with you and answer any questions you might have. Whether you want to know how to prepare injera, the staple flatbread, or what are some of the most popular dishes and spices in Ethiopia, I’m here to help. I can also tell you about the history, geography, and traditions of this amazing country. Just type your question and I’ll try to give you a satisfying answer. Let’s have some fun! 😊";

// The element where the text will be displayed
var typewriter = document.getElementById("typewriter");

// The index of the current character
var index = 0;

// The speed of typing in milliseconds
var speed =70;

// A counter to keep track of how many conversations have been started
var count = 0;

// A flag to indicate if the chatbot should ask more questions
var askMore = true;

// The function that prompts the user for their name
function askForName() {
  var inputName = document.getElementById("input-name");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("placeholder", "🤖 Enter your name...");
  inputName.setAttribute("class", "input-name");
  var intro = document.getElementById("typewriter");
  var from = document.getElementById("from");
  text = "Hello, what's your name?";
  inputName.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      event.preventDefault();
      // Trigger the button element with a click
      document.querySelector("button").click();
    }
  });
  var submitButton = document.getElementById("submit-name");
  submitButton.setAttribute("type", "button");
  submitButton.setAttribute("id", "submit-button");
  submitButton.onclick = function () {
   inputName.disabled = true;
    var name = inputName.value;
    // typewriter.innerHTML += "<br>" + "Hi " + name + "! ";
    var response = document.getElementById("response");
    response.innerHTML =  name + "";
    response.style.color = "black";
    response.style.fontWeight= "500"
    response.style.textTransform = "capitalize"
        inputName.value = "";
    setTimeout(startConversation, 1000);
  };
  var chatbotFooter = document.querySelector(".chatbot-footer");
  chatbotFooter.innerHTML = "";
  chatbotFooter.appendChild(inputName);
  chatbotFooter.appendChild(submitButton);
}
// The function that starts responding after getting the user's name
function startConversation() {
  // Reset the index
  
  index = 0;
  // Change the text to the first conversation message
  response.style.textTransform = "capitalize"
  text = "Hello, " + response.innerHTML +
    "  , How lovely your name is. There is a nice story I want to tell you before we start our conversation. I hope you’re eager. 😊";
  // Add a line break to the typewriter element
  typewriter.innerHTML += "<hr>";
  // Call the type function
  type();
}

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
    if (askMore && count < 7) {
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
      text = "Content Warning: This story contains themes of violence and horror. 👻";
      break;
    case 2:
      text = "Jake had been dating Emily for a few months when he first noticed something strange about her. She would sometimes stare off into space, her eyes glazed over, and not respond to anything he said. At first, he thought it was just a quirk, but as time went on, the episodes became more frequent and intense.";
      break;
    case 3:
      text = "During their last encounter, Jake addressed Emily using that secrete name, Emily's eyes widened, and she started convulsing. Jake tried to calm her down, but she lashed out at him with incredible strength, throwing him across the room. Consequently, Jake vowed to refrain from using that particular name when speaking to her.";
      // Set the flag to false so that no more questions are asked
      // askMore = false;
      break;
      case 4:
        text = "Despite Jake's avoidance of the secret name, Emily began to provoke him and challenge him to use it. Over time, Jake realized that Emily was testing his patience and even hiding his letters. In response, he hatched a plan to send her a message using a talking goat 🐐, deliberately using the forbidden word consisting of six evilish-devilish letters to provoke her and see how she would react.";
       break;
       case 5:
        text = "The talking goat was willing to deliver the message and when it arrived at her house, it saw Emily washing her dirty feet 🤢. The goat wasted no time and immediately screamed the forbidden word. 'M-I-T-U-Y-E-E-E...' screamed the taking goat... 😂🤣";
        break;
        case 6:
          text = "እና ምን ለማለት  ፈልጌ ኖ " + response.innerHTML + " .I mean MITUYE. I am the talking goat. 🐐";
          case 7:
            text = "👋";
        askMore = false;
        break;
    default:
      text = "";
      break;
  }
  // Add a line break to the typewriter element
  typewriter.innerHTML += "<hr>";
  // Call the type function again
  type();
}

// Call the function that prompts the user for their name when the page loads
window.onload = askForName;
