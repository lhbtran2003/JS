// Hàm kiểm tra số nguyên tố
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let numbers = [2, 3, 5, 6, 7, 11, 13, 17, 19, 23];

console.log("Các số nguyên tố trong mảng:");
for (let number of numbers) {
    if (isPrime(number)) {
        console.log(number);
    }
}
