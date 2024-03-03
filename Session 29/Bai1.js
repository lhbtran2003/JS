function kiemTraChanLe(number) {
    if (number % 2 === 0) {
        return "số chẵn";
    } else {
        return "số lẻ";
    }
}

const number1 = Math.floor(Math.random() * 100);
const number2 = Math.floor(Math.random() * 100);
const number3 = Math.floor(Math.random() * 100);

console.log(number1 + " là " + kiemTraChanLe(number1));
console.log(number2 + " là " + kiemTraChanLe(number2));
console.log(number3 + " là " + kiemTraChanLe(number3));
