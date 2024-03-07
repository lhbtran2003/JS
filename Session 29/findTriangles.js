// Hàm kiểm tra xem 3 phần tử trong mảng có trùng nhau hay không
function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length;
}

// Hàm tính số lượng tam giác có thể tạo ra từ một mảng số nguyên dương
function countTriangles(arr) {
    const n = arr.length;
    if (n < 3) {
        return 0; // Nếu mảng có ít hơn 3 phần tử, không thể tạo tam giác
    }

    let count = 0;

    // // Duyệt qua tất cả cặp phần tử trong mảng
    // for (let i = 0; i < n - 2; i++) {
    //     for (let j = i + 1; j < n - 1; j++) {
    //         for (let k = j + 1; k < n; k++) {
    //             const triangle = [arr[i], arr[j], arr[k]];
    //             // Kiểm tra xem 3 phần tử có trùng nhau không
    //             if (!hasDuplicate(triangle)) {
    //                 count++;
    //             }
    //         }
    //     }
    // }
     
    const combinations = arr.map((element, i) => {
        return arr.filter((innerElement, j) => i < j).map((innerElement) => [element, innerElement]);
      }).flat();
      
    return count;
}

// Nhập số lượng phần tử
const n = parseInt(prompt("Nhập số lượng phần tử:"));

// Khai báo mảng và nhập giá trị từng phần tử
const arr = [];
for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt(`Nhập giá trị phần tử thứ ${i + 1}:`)));
}

// Gọi hàm tính số lượng tam giác có thể tạo ra và in kết quả
const result = countTriangles(arr);
console.log(`Số lượng tam giác có thể tạo ra từ mảng là: ${result}`);
