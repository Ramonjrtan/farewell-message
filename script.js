let messages = {};

fetch('messages.json')
  .then(response => response.json())
  .then(data => {
    messages = data;
  })
  .catch(error => {
    document.getElementById("messageBox").innerText = "Failed to load messages.";
    console.error("Error loading messages:", error);
  });

function checkCode(event) {
  if (event.key === "Enter") {
    const code = event.target.value.trim().toLowerCase();
    const message = messages[code];

    if (message) {
      document.getElementById("messageBox").innerText = message;
    } else {
      document.getElementById("messageBox").innerText = "❌ No message found for that name/code.";
    }
  }
}
