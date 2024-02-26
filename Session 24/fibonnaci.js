let numberInput = prompt(`Nhập vào 1 số nguyên dương`);
numberInput = Number(numberInput);
let fib1 = 0;
let fib2 = 1;
let fibTotal;


for (let i = 3; i <=numberInput; i++){
   fibTotal = fib1 + fib2;
   fib1= fib2;
   fib2 = fibTotal;
}
console.log(`Số fibonacci thứ ${numberInput} là ${fibTotal}`);