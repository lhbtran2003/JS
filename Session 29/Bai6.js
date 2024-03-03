function vietHoaChuCaiDau(chuoi) {
    return chuoi.toLowerCase().replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

const chuoi = 'hello mọi người tớ tên Bảo Trân';

const ketQua = vietHoaChuCaiDau(chuoi);
console.log("Chuỗi sau khi viết hoa chữ cái đầu:", ketQua);
