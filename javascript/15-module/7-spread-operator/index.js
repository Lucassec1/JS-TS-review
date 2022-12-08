const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [...array1, array2];

console.log(array3);

const array4 = [0, ...array1, 4];

console.log(array4);

const carName = {name: 'Celta'}
const carBrand = {brand: 'Chevrolet'}
const otherInfos = {km: 100000, price: 34000}

const car = {...carName, ...carBrand, ...otherInfos, wheels: 4}

console.log(car);