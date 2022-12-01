let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let p = document.querySelector('p');

function message (e) {
    console.log('Clicked here');
    e.stopPropagation();
}

btn1.addEventListener('click', message);

btn2.addEventListener('click', function(e) {
    console.log(e);
});

p.addEventListener(click, function(e) {
    console.log('clicked in paragraph');
})