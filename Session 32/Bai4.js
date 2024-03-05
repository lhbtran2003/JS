const product = {
    id: '123',
    name: 'Áo thun',
    price: 150000,
    quantity: 10
};

for (const key in product) {
    console.log(`${key}: ${product[key]}`);
}
