const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenArr = arr.filter(num => num % 2 === 0);
const oddArr = arr.filter(num => num % 2 !== 0);

console.log("Mảng chứa số chẵn:");
console.log(evenArr);
console.log("Mảng chứa số lẻ:");
console.log(oddArr);
