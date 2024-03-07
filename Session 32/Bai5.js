const books = [
    { author: 'JKRowling', name: 'Harry Potter' },
    { author: 'Nguyễn Nhật Ánh', name: 'Hạ Đỏ' },
    { author: 'NXB GiaO Duc', name: 'Đại số 11' },
    { author: 'Nam Cao', name: 'Chí Phèo' }
];

const authorName = prompt("Nhập tên tác giả:");

let found = false;

for (let i = 0; i < books.length; i++) {
    if (books[i].author === authorName) {
        console.log("Sách tìm được:");
        console.log(books[i]);
        found = true;
    }
}

if (!found) {
    console.log("Không tìm thấy sách.");
}