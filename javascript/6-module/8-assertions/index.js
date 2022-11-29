let array = [1, 2, 3, 4, 5];
let array2 = [];

function iterateArray(array) {
    if(array.length == 0) {
        throw new Error('The array must have at least one element');
    } else {
        for (let i = 0; i < array.length; i++) {
            console.log(i);
        }
    }
}

function emptyArray(array) {
    if (array.length != null) {
        throw new Error('The array cannot have elements');
    } else {
        console.log('Now it worked');
    }
}

// iterateArray(array);
// iterateArray(array2);

emptyArray(array);
emptyArray(array2);