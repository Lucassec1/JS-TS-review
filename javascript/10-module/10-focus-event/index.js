window.addEventListener('load', function() {
    this.alert('sign our terms of use');
});

window.addEventListener('beforeunload', function(e) {
    e.returnValue = null;
});
