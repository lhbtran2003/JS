const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const newUser = {
        username: username,
        email: email,
        password: password
    };

    // Kiểm tra xem localStorage đã có dữ liệu người dùng chưa
    let users = JSON.parse(localStorage.getItem('users')) || [];

    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    registrationForm.reset();

    alert('User registered successfully!');
});
