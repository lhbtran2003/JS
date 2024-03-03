function findAmountIndex (str) {
    str = str.replace(/\s/g, '');
    return str.length;
}

let string = window.prompt('Enter a string');
console.log('Số ký tự trong chuỗi là:' + findAmountIndex(string));