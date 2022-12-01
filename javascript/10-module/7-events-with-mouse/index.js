let button1 = document.querySelector('#btn1');
let button2 = document.querySelector('#btn1');

button1.addEventListener('mousedown', function() {
    console.log('clicked on button');
});

button1.addEventListener('mouseup', function() {
    console.log('released the button');
});

button2.addEventListener('dblclick', function() {
    console.log('clicked two times on button');
});

button2.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    console.log('clicked with right button');
});