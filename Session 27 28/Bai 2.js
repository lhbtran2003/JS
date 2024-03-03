const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Nhập số nguyên a: ', (a) => {
  rl.question('Nhập số nguyên b: ', (b) => {
    a = parseInt(a);
    b = parseInt(b);

    if (isNaN(a) || isNaN(b)) {
      console.log('Vui lòng nhập số nguyên.');
      rl.close();
      return;
    }

    const arr = [];
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }

    console.log('Mảng chứa các số từ ' + start + ' đến ' + end + ' là:');
    console.log(arr);

    rl.close();
  });
});
