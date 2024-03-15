document.getElementById("xoaCauThuBtn").addEventListener("click", function() {
    const idCanXoa = document.getElementById("idCauThuXoa").value;

    let danhSachCauThu = JSON.parse(localStorage.getItem('danhSachCauThu'));

    if (danhSachCauThu) {
        danhSachCauThu = danhSachCauThu.filter(function(cauThu) {
            return cauThu.id !== parseInt(idCanXoa);
        });

        localStorage.setItem('danhSachCauThu', JSON.stringify(danhSachCauThu));

        alert(`Đã xóa cầu thủ có ID: ${idCanXoa}`);
        hienThiDanhSachCauThu();
    } else {
        alert('Không có cầu thủ nào trong danh sách');
    }
});

function hienThiDanhSachCauThu() {
    const displayInfo = document.getElementById('displayInfo');
    displayInfo.innerHTML = '';

    let danhSachCauThu = JSON.parse(localStorage.getItem('danhSachCauThu'));

    if (danhSachCauThu) {
        danhSachCauThu.forEach(function(cauThu) {
            displayInfo.innerHTML += `ID: ${cauThu.id}, Họ tên: ${cauThu.ten}<br>`;
        });
    } else {
        displayInfo.innerHTML = 'Danh sách cầu thủ trống';
    }
}

window.onload = function() {
    hienThiDanhSachCauThu();
};