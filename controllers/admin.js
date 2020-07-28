const Book = require('../models/book');


// GET /admin
exports.getIndex = (req, res) => {
    res.render('admin/index', {
        path: '/admin',
        isAdmin: true
    });
}

// GET /admin/books
exports.getBooks = (req, res) => {
    res.render('admin/books', {
        path: '/admin/books',
        books: Book.getAll(),
        isAdmin: true
    });
}

// GET /admin/add-book
exports.getAddBook = (req, res) => {
    res.render('admin/add-book', {
        path: '/admin/add-book',
        isAdmin: true
    });
}

// POST /admin/add-book
exports.postAddBook = (req, res) => {
    const book = new Book(req.body.name, req.body.price);
    book.save();
    res.redirect('/admin/books');
}