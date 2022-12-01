let newElement = document.createElement('p');
let text = document.createTextNode('Some text');

newElement.appendChild(text);

let targetElement = document.querySelector('#main-title');
let parentElement = document.querySelector('#main-container');

parentElement.insertBefore(newElement, targetElement);

