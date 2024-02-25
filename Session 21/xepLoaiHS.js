let diemToan, diemVan, diemAnh;

diemToan = parseFloat(prompt("Nhập điểm môn Toán:"));
diemVan = parseFloat(prompt("Nhập điểm môn Văn:"));
diemAnh = parseFloat(prompt("Nhập điểm môn Anh:"));

let diemTrungBinh = (diemToan + diemVan + diemAnh) / 3;

console.log(`Điểm trung bình: ${diemTrungBinh.toFixed(2)}`);

if (diemTrungBinh >= 8.0 && diemTrungBinh <= 10) {
    console.log("Xếp loại: GIỎI");
} else if (diemTrungBinh >= 6.5 && diemTrungBinh <= 7.9) {
    console.log("Xếp loại: KHÁ");
} else if (diemTrungBinh >= 5.0 && diemTrungBinh <= 6.4) {
    console.log("Xếp loại: TRUNG BÌNH");
} else {
    console.log("Xếp loại: YẾU");
}
