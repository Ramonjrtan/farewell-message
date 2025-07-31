let messages = {};

// Load the messages JSON file
fetch('messages.json')
  .then(response => response.json())
  .then(data => {
    messages = data;
  })
  .catch(error => {
    const messageBox = document.getElementById("messageBox");
    messageBox.innerText = "Failed to load messages.";
    console.error("Error loading messages:", error);
  });

function checkCode(event) {
  const input = event.target.value.toLowerCase().trim();
  const messageBox = document.getElementById("messageBox");
  messageBox.innerHTML = ""; // Clear previous content

  if (messages[input]) {
    // Create and append message text
    const messageParagraph = document.createElement("p");
    messageParagraph.style.whiteSpace = "pre-wrap";
    messageParagraph.style.wordBreak = "break-word"; // Ensure long words/wrapped lines are handled
    messageParagraph.style.textAlign = "left"; // Optional: improve readability
    messageParagraph.innerText = messages[input];
    messageBox.appendChild(messageParagraph);

    // Create and append image
    const imageSection = document.createElement("div");
    imageSection.className = "image-section";

    const image = document.createElement("img");
    image.src = "https://38.media.tumblr.com/ef2f0535450b01ad91c23b4e38646e2b/tumblr_mryzllIRT91rz5foro1_r1_500.gif";
    image.alt = "Thank You GIF";

    imageSection.appendChild(image);
    messageBox.appendChild(imageSection);
  } else {
    messageBox.innerText = "Sorry, no message found for that name...";
  }
}
