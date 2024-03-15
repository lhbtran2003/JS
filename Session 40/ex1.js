 // Lấy form và vùng hiển thị thông tin
 const infoForm = document.getElementById('infoForm');
 const displayInfo = document.getElementById('displayInfo');

 // Lấy đối tượng từ localStorage
 const savedInfo = JSON.parse(localStorage.getItem('personalInfo'));
 // nếu đã có thì hiển thị
 if (savedInfo) {
     displayInfo.innerHTML = `Full Name: ${savedInfo.fullName}<br>`;
     displayInfo.innerHTML += `Age: ${savedInfo.age}<br>`; // += tức là thêm nội dung vào cuối phần tử đang có
     displayInfo.innerHTML += `Email: ${savedInfo.email}<br><br>`;
 }

 // Sự kiện submit form
 infoForm.addEventListener('submit', function (event) {
     event.preventDefault(); // chặn mấy cái submit đc mặc định

     // Lấy giá trị từ form
     const fullName = document.getElementById('fullName').value;
     const age = document.getElementById('age').value;
     const email = document.getElementById('email').value;

     // Tạo đối tượng thông tin cá nhân
     const personalInfo = {
         fullName: fullName,
         age: age,
         email: email
     };

     // Lưu đối tượng user lên local storage
     localStorage.setItem('personalInfo', JSON.stringify(personalInfo)); //key: personalInfo

     // Hiển thị thông tin lên màn hình
     displayInfo.innerHTML = `Full Name: ${fullName}<br>`;
     displayInfo.innerHTML += `Age: ${age}<br>`;
     displayInfo.innerHTML += `Email: ${email}<br><br>`;

     // Xóa dữ liệu nhập trên form
     infoForm.reset();

});