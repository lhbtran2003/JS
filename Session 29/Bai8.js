function coTheTaoChuoi(chuoiKhaiBao, chuoiNhap) {
    const charCount = {};

    // Đếm số lần xuất hiện của mỗi ký tự trong chuỗi khai báo
    for (const char of chuoiKhaiBao) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Kiểm tra xem có đủ ký tự trong chuỗi khai báo để tạo ra chuỗi nhập vào không
    for (const char of chuoiNhap) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}

const chuoiKhaiBao = "abcde";

const chuoiNhap = prompt("Nhập vào một chuỗi:").trim();

const ketQua = coTheTaoChuoi(chuoiKhaiBao, chuoiNhap);
console.log(`Có thể tạo ra chuỗi '${chuoiNhap}' từ các ký tự trong chuỗi '${chuoiKhaiBao}': ${ketQua}`);
