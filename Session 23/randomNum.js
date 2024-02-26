const randomNumber = Math.floor(Math.random() * 10) + 1;

console.log("Một số ngẫu nhiên đã được tạo từ 1 đến 10.");

let guess;

do {
    guess = parseInt(prompt("Nhập vào một số từ 1 đến 10:"));

    if (isNaN(guess)) {
        console.log("Vui lòng nhập một số hợp lệ.");
    } else if (guess > randomNumber) {
        console.log("Lớn hơn số ngẫu nhiên.");
    } else if (guess < randomNumber) {
        console.log("Nhỏ hơn số ngẫu nhiên.");
    } else {
        console.log("Chính xác! Bạn đã đoán đúng.");
    }
} while (guess !== randomNumber);
