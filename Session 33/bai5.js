class Book {
    constructor(title, author, publishYear) {
        this.title = title;
        this.author = author;
        this.publishYear = publishYear;
        this.isAvailable = true; // Sách mặc định là có sẵn
    }

    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`Book "${this.title}" has been borrowed.`);
        } else {
            console.log(`Book "${this.title}" is already borrowed.`);
        }
    }

    returnBook() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`Book "${this.title}" has been returned.`);
        } else {
            console.log(`Book "${this.title}" is already available.`);
        }
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    displayBooks() {
        console.log('Library Books:');
        this.books.forEach(book => {
            console.log(`Title: ${book.title}`);
            console.log(`Author: ${book.author}`);
            console.log(`Publish Year: ${book.publishYear}`);
            console.log(`Available: ${book.isAvailable ? 'Yes' : 'No'}`);
            console.log('--------------------------');
        });
    }

    addBookFromUser() {
        let title = prompt('Enter title:');
        let author = prompt('Enter author:');
        let publishYear = prompt('Enter publish year:');

        let book = new Book(title, author, publishYear);
        this.addBook(book);
    }
}

let library = new Library();

library.addBookFromUser();

library.displayBooks();

let bookToBorrow = prompt('Enter the title of the book you want to borrow:');
let borrowedBook = library.books.find(book => book.title === bookToBorrow);
if (borrowedBook) {
    borrowedBook.borrow();
} else {
    console.log(`Book "${bookToBorrow}" is not found in the library.`);
}

let bookToReturn = prompt('Enter the title of the book you want to return:');
let returnedBook = library.books.find(book => book.title === bookToReturn);
if (returnedBook) {
    returnedBook.returnBook();
} else {
    console.log(`Book "${bookToReturn}" is not found in the library.`);
}

library.displayBooks();
