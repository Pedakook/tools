import { createWysimark } from "@wysimark/standalone"

// Get the editor container element
const container = document.getElementById("editor-container")

// Create the Wysimark component
const wysimark = createWysimark(container, {
  initialMarkdown: "# Hello World",
})

const fileSelector = document.getElementById("fileSelector");
const button = document.getElementById("button");

fileSelector.addEventListener("change", (event) => {
  const fileName = event.target.value;
  if (fileName === 'new') {
    wysimark.setMarkdown("");
  } else {
    fetch(`http://localhost:3000/getFile/${fileName}`)
      .then(response => response.json())
      .then(data => {
        wysimark.setMarkdown(data.content);
      })
      .catch(error => console.error('Error:', error));
  }
});

// Function to populate the file selector
function populateFileSelector() {
    fetch('http://localhost:3000/listFiles')
      .then(response => response.json())
      .then(data => {
        if (data.files && data.files.length > 0) {
          data.files.forEach(file => {
            const option = document.createElement('option');
            option.value = option.textContent = file;
            fileSelector.appendChild(option);
          });
        }
      })
      .catch(error => console.error('Error:', error));
  }
  
  // Populate the file selector on page load
  populateFileSelector();

button.addEventListener("click", () => {
  const markdown = wysimark.getMarkdown();
  let fileName = fileSelector.value;

  if (fileName === 'new') {
    fileName = prompt("Enter a file name for the new Markdown file:", "newFile.md");
    if (!fileName) return; // Do not proceed if no filename is provided
  }
  fetch('http://localhost:3000/saveMarkdown', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ markdown, fileName }),
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((error) => console.error('Error:', error));
});