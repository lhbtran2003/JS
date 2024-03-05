const numberOfStudents = parseInt(prompt('Nhập số lượng sinh viên:'));

const students = [];

for (let i = 0; i < numberOfStudents; i++) {
    const id = prompt(`Nhập ID của sinh viên thứ ${i + 1}:`);
    const name = prompt(`Nhập tên của sinh viên thứ ${i + 1}:`);
    students.push({ id: id, name: name });
}

console.log('Danh sách sinh viên:');
console.log(students);
