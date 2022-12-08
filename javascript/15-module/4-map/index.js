const products = [
    {name: 'Shirt', price: 39.90, category: 'cothes'},
    {name: 'Stove', price: 1399.99, category: 'electro'},
    {name: 'Television', price: 999.99, category: 'electro'},
    {name: 'Shoes', price: 299.90, category: 'cothes'}
];

products.map((product) => {
    if (product.category === 'clothes') {
        // add a new property
        product.onSale = true;
    }
});

console.log(products);