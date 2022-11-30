const promisse = new promisse(function(resolve, reject) {
    setTimeout(function() {
        resolve(70);
    }, 5000)
});

const promisse2 = Promise.resolve(28);

const promisse3 = new Promise((resolve, reject) => {
    resolve(10);
});

Promise.all([promisse, promisse2, promisse3]).then((values) => console.log(values));
