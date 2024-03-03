const arr = [1, 2, 3, 4, 5, 6, 3, 4, 7, 8, 9, 10, 1];

let uniqueElement = null;
for (const num of arr) {
    if (arr.indexOf(num) === arr.lastIndexOf(num)) {
        uniqueElement = num;
        break;
    }
}

if (uniqueElement !== null) {
    console.log("Phần tử đầu tiên là độc nhất trong mảng là:", uniqueElement);
} else {
    console.log("Không có phần tử nào là độc nhất trong mảng.");
}
