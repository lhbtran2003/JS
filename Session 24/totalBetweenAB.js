let numA = Number(prompt(`Nhập số bắt đầu A`));
let numB = Number(prompt(`Nhập số bắt đầu B`));
let total = 0;
for (let i = numA+1; i < numB; i++) {
    total += i;
}
console.log(total);