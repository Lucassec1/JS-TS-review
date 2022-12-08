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

class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price);
        this.colors = colors;
    }
    showColors() {
        console.log('The colors are:')
        this.colors.forEach(color => {
            console.log(color);
        });
    }
}

const hat = new ProductWithAttributes('hat', 39.90, ['black', 'white', 'blue', 'red', 'cyan', 'green', 'orange']);

console.log(hat.name);

console.log(hat.productWithDiscount(20));

hat.showColors();