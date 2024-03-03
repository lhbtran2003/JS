const arr = [5, 3, 8, 2, 10, 1, 7, 4, 6, 9];

const newArr = arr.slice().sort(() => Math.random() - 0.5);

console.log("Mảng mới sau khi sắp xếp theo thứ tự ngẫu nhiên:");
console.log(newArr);
