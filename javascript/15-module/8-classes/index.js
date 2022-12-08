class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product('shirt', 39.90);
console.log(shirt.name);

console.log(shirt.productWithDiscount(40));

const shoes = new Product('shoes', 249.90);

console.log(shoes.price);

console.log(shoes.productWithDiscount(25));