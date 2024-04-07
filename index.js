// Write your code here!
// Step 1: Remove the <main> element with ID 'main'
const mainElement = document.getElementById('main');
if (mainElement) {
    mainElement.remove();
}

// Step 2 & 3: Create a new <h1> element, set its properties, and append it to the body
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your actual name
document.body.appendChild(newHeader);
