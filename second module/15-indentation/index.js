let x = 1;
let y = 1;

if (x == 1 && y == 1) {
    let z = 2;
    if (z > 0) {
        console.log(z);
        for(i = 0; i < 5; i++) {
            console.log(i);
            if (i == 3) {
                console.log(`i é igual a ${i}`)
            }
        }
    }
}