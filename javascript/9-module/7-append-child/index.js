let newElement = document.createElement('p');
let text = document.createTextNode('Some text');

newElement.appendChild(text);

let p = document.querySelector('#main-paragraph');
let parentElement = p.parentNode;

parentElement.appendChild(newElement);
