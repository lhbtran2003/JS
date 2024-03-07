function sortCharacters(str) {
    let letters = [];
    let digits = [];
    let specials = [];

    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            letters.push(char);
        } else if (/[0-9]/.test(char)) {
            digits.push(char);
        } else {
            specials.push(char);
        }
    }

    let resultArray = [...letters, ...digits, ...specials];

    return resultArray;
}

let inputString = prompt("Nhập vào một chuỗi bất kỳ:");

console.log("Chuỗi sau khi sắp xếp các ký tự:");
console.log(sortCharacters(inputString));
