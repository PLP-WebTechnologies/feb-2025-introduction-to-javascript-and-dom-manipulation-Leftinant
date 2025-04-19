// Changing Text Content Dynamically
const dynamicTextElement = document.getElementById('dynamicText');
const changeTextButton = document.getElementById('changeTextBtn');

changeTextButton.addEventListener('click', () => {
    dynamicTextElement.textContent = 'The text has been changed by JavaScript!';
});

// Modifying CSS Styles via JavaScript
const styledElement = document.getElementById('styledElement');
const styleButton = document.getElementById('styleBtn');

styleButton.addEventListener('click', () => {
    styledElement.style.backgroundColor = 'yellow';
    styledElement.style.color = 'blue';
    styledElement.style.fontWeight = 'bold';
    styledElement.style.padding = '1.5em';
    styledElement.style.border = '2px solid orange';
});

// Adding or Removing an Element
const addElementButton = document.getElementById('addElementBtn');
const removeElementButton = document.getElementById('removeElementBtn');
const container = document.getElementById('container');

addElementButton.addEventListener('click', () => {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'New Element Added!';
    newDiv.classList.add('new-element');
    container.appendChild(newDiv);
});

removeElementButton.addEventListener('click', () => {
    if (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    } else {
        alert('No elements to remove!');
    }
});