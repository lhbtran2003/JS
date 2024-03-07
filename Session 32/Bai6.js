function sortProductsByPrice(products) {
    products.sort((a, b) => a.price - b.price);

    console.log("Danh sách products đã được sắp xếp theo giá tăng dần:");
    products.forEach(product => {
        console.log(ID: ${product.id}, Product Name: ${product.product_name}, Price: ${product.price});
    });
}

const products = [
    { id: 1, product_name: 'snack khoai tây', price: 17 },
    { id: 2, product_name: 'kẹo mút', price: 5 },
    { id: 3, product_name: 'bánh tráng trộn', price: 20 },
];

sortProductsByPrice(products);