function timPhanTuChuaChuoi(arr, chuoi) {
    return arr.filter(element => element.includes(chuoi));
}

const mangChuoi = ["hello world", "goodbye", "hello there", "hey", "hi there"];

const chuoiNhap = prompt("Nhập vào chuỗi:");

const ketQua = timPhanTuChuaChuoi(mangChuoi, chuoiNhap);
console.log("Các phần tử trong mảng chứa chuỗi '" + chuoiNhap + "' là:");
console.log(ketQua);
