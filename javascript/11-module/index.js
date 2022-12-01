let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

// move counter
let player1 = 0;
let player2 = 0;

// adding the click event on the boxes
for(let i = 0; i < boxes.length; i++) {

    // when someone clicks on the box
    boxes[i].addEventListener('click', function() {
        let element = checkElement(player1, player2);

        // checks if it already has x or o
        if(this.childNodes.length == 0) {
            let cloneElement = element.cloneNode(true);
            this.appendChild(cloneElement);
            
            // compute play
            if(player1 == player2) {
                player1++;
            } else {
                player2++;
            }
        }
    });
} 

// see who will play
function checkElement(player1, player2) {
    if(player1 == player2) {
        // x 
        element = x;
    } else {
        // o
        element = o
    }

    return element;
}