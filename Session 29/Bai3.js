function demSoKyTu(chuoi) {
    return chuoi.replace(/\s/g, "").length;
}

const chuoi = "Đây là một chuỗi bất kỳ";

const soKyTu = demSoKyTu(chuoi);
console.log("Số ký tự trong chuỗi (không tính ký tự trống):", soKyTu);
