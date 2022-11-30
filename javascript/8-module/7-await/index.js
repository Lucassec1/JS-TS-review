async function sum(a, b) {
    return new Promisse(resolve => {
        setTimeout(function() {
            resolve (a + b);
        }, 2000);
    })
}

async function resolveSum(a, b, c) {
    let x = sum(a, b);
    let y = c;

    return await x + y;
}

resolveSum(5, 2, 7).then(value => console.log(value));
