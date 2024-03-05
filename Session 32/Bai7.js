const users = [];

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function createUser() {
    let id = users.length + 1;
    let user_name = prompt('Nhập tên người dùng:');
    let email = prompt('Nhập email:');
    let password = prompt('Nhập mật khẩu:');

    while (!user_name || user_name.length < 3 || !email || !validateEmail(email) || !password || password.length < 8) {
        console.log('Dữ liệu không hợp lệ. Vui lòng nhập lại:');
        user_name = prompt('Nhập tên người dùng:');
        email = prompt('Nhập email:');
        password = prompt('Nhập mật khẩu:');
    }

    return { id, user_name, email, password };
}

function addUser() {
    const user = createUser();
    users.push(user);
}

const numOfUsers = parseInt(prompt('Nhập số lượng người dùng muốn thêm:'));
for (let i = 0; i < numOfUsers; i++) {
    addUser();
}

console.log('Danh sách người dùng:');
console.log(users);
