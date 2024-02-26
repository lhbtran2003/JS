let aInput = prompt('Nhập vào số nguyên dương a:');
let bInput = prompt('Nhập vào số nguyên dương b:');

let a = parseInt(aInput);
let b = parseInt(bInput);

if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
  console.log('Vui lòng nhập vào hai số nguyên dương.');
} else {
  console.log(`Các số chia hết cho ${b} trong khoảng từ 1 đến ${a}:`);
  for (let i = 1; i <= a; i++) {
    if (i % b === 0) {
      console.log(i);
    }
  }
}
