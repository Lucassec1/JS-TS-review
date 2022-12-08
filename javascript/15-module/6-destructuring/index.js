const fruits = ['banana', 'orange', 'apple', 'pineapple', 'grapes'];

const [f1, f2, f3, f4, f5] = fruits;

console.log(f3);

const productDetails = {
    name: 'Mouse',
    price: 139.90,
    category: 'Peripherals',
    color: 'Black'
}

const {name: productName, price, category: categoryName, color} = productDetails;

console.log(`The name from product is ${productName}, costs R$${price}, belongs to category ${productCategory} and have the color ${color}`);