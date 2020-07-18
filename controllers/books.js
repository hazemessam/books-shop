const Book = require('../models/book');


exports.getAddBook = (req, res) => {
    res.render('add-book', {path: '/admin/add-book'});
}

exports.postAddBook = (req, res) => {
    const book = new Book(req.body.name, req.body.price);
    book.save();
    res.redirect('/books');
}

exports.getBooks = (req, res) => {
    let books = Book.getAll();
    res.render('books', {path: '/books', books});
}