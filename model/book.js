let books = [
    {
        "bookId": 1,
        "title": "Node.js",
        "author": {
            "authorId": 303,
            "firstname": "Edward",
            "lastname": "Jack"
        }
    },
    {
        "bookId": 2,
        "title": "Angular",
        "author": {
            "authorId": 308,
            "firstname": "John",
            "lastname": "Smith"
        }
    }
];

let idCounter = 3;

module.exports = class Book {
    constructor(bookId, title, author) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
    }

    static getAll() {
        return books;
    }

    static getBookById(bookId) {
        const book = books.find(book => book.bookId === bookId);
        if (!book) {
            throw new Error(`No Book found with ID ${bookId}`);
        }
        return book;
    }

    save() {
        this.bookId = Math.max(...booksData.map(book => book.bookId)) + 1;
        booksData.push(this);
        return this;
    }

    update() {
        const index = books.findIndex(book => book.bookId === this.bookId);
        if (index === -1) {
            throw new Error(`No Book found with ID ${bookId}`);
        }
        booksData[index] = this;
        return this;
    }

    static deleteById(bookId) {
        const index = books.findIndex(book => book.bookId === bookId);
        if (index === -1) {
            throw new Error(`No Book found with ID ${bookId}`);
        }
        const deletedBook = books.splice(index, 1)[0];
        return deletedBook;
    }
}

module.exports = Book;
