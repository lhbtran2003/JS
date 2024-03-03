const arr = [1, 2, 3, 4, 2, 3, 4, 5, 2, 3, 2];
let inputNumber = parseInt(prompt("Nhập vào một số nguyên:"));
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === inputNumber) {
        count++;
    }
}
console.log(`Số ${inputNumber} xuất hiện ${count} lần trong mảng.`);
