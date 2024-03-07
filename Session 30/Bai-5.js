function capitalizeLastLetterOfWords(str) {
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word.slice(0, -1) + word.slice(-1).toUpperCase();
    }

    return words.join(" ");
}

let inputString = prompt("Nhập vào một chuỗi bất kỳ:");

console.log("Chuỗi sau khi chuyển đổi ký tự cuối cùng của mỗi từ thành chữ hoa:");
console.log(capitalizeLastLetterOfWords(inputString));
