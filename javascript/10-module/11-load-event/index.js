let input = document.querySelector('#input1');

input.addEventListener('focus', function() {
    console.log('entered the event');
});

input.addEventListener('blur', function() {
    console.log('entered the event');
});