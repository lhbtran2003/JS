const arr = [5, 2, 9, 10, 1, -3, 8];
let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log("Phần tử lớn nhất trong mảng là: " + max);
console.log("Phần tử nhỏ nhất trong mảng là: " + min);
