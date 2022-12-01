window.addEventListener('keydown', function(e) {
    if (e.key == 'q') {
        console.log('clicked on letter Q');
    } else if (e.key == 'Enter') {
        console.log('clicked on enter');
    }
});

window.addEventListener('keyup', function(e) {
    if (e.key == "Enter") {
        console.log('released the enter');
    }
});