let btn1 = document.querySelector('#btn1');

function message (e) {
    console.log(e);
}

btn1.addEventListener('click', message);

let btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', function(e) {
    console.log(e);
});