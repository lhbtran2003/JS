function isArraySymmetric(arr) {
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        // Nếu phần tử không đối xứng thì trả về false
        if (arr[i] !== arr[j]) {
            return false;
        }
    }
    return true;
}

let arr1 = [1, 2, 3, 2, 1];
let arr2 = ["z", "z"];
let arr3 = [1, "c", "c", 1];

console.log(isArraySymmetric(arr1)); // Kết quả: true
console.log(isArraySymmetric(arr2)); // Kết quả: true
console.log(isArraySymmetric(arr3)); // Kết quả: true
