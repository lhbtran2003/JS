let numberInput = prompt('Nhập vào một số nguyên dương:');
let number = parseInt(numberInput);

if (isNaN(number) || number <= 0) {
  alert('Vui lòng nhập vào một số nguyên dương.');
} else {
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  alert(`Giai thừa của ${number} là: ${factorial}`);
}
