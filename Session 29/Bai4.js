function demSoLanXuatHien(chuoi, kyTu) {
    let count = 0;
    for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] === kyTu) {
            count++;
        }
    }
    return count;
}

const chuoi = prompt("Nhập chuỗi:");
const kyTu = prompt("Nhập ký tự:");

const soLanXuatHien = demSoLanXuatHien(chuoi, kyTu);
console.log(`Số lần xuất hiện của ký tự "${kyTu}" trong chuỗi "${chuoi}" là: ${soLanXuatHien}`);
