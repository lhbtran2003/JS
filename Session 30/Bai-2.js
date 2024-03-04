function printOddNumbers(n) {
    let sum = 0;
    let count = 0;

    for (let i = 1; i <= n; i += 2) {
        console.log(i);
        sum += i;
        count++;
    }

    if (sum % 2 === 0) {
        console.log(n + 1);
        count++;
    }

    console.log("Tổng số lượng số lẻ đã in ra:", count);
}

let n = parseInt(prompt("Nhập vào một số nguyên dương n:"));

console.log("Các số nguyên dương lẻ và tổng của chúng:");
printOddNumbers(n);
