let btn1 = document.querySelector('#btn1');

function message () {
    console.log('clicked here!');
}

btn1.addEventListener('click', message);

let btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', function() {
    btn1.removeEventListener('click', message);
});