class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }

    displayInfoBook() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Published Year: ${this.publishedYear}`);
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    displayAllBooks() {
        console.log("List of all books in the library:");
        this.books.forEach((book, index) => {
            console.log(`Book ${index + 1}:`);
            book.displayInfoBook();
            console.log("-------------------------");
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

do {
    library.addBookFromUser();
    const continueAdding = prompt("Do you want to add another book? (yes/no)").toLowerCase();
    if (continueAdding !== "yes") {
        break;
    }
} while (true);

library.displayAllBooks();
