const Book = require('../models/Book');

exports.getAll = (req, res) => {
    res.status(200).json(Book.getAll());
};

exports.getBookById = (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = Book.getBookById(bookId);
    res.json(book);
};

exports.createBook = (req, res) => {
    const { title, author } = req.body;
    const newBook = new Book(null, title, author);
    const savedBook = newBook.save();
    res.status(201).json(savedBook);
};

exports.updateBook = (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const { title, author } = req.body;
    const updatedBook = new Book(bookId, title, author);
    updatedBook.update();
    res.sendStatus(204);
};

exports.deleteBook = (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const deletedBook = Book.deleteById(bookId);
    res.json(deletedBook);
};
