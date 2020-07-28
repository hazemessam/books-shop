const Book = require('../models/book');


// GET /
exports.getIndex = (req, res) => {
    res.render('shop/index', {
        path: '/',
        isAdmin: false
    });
}

// GET /books
exports.getBooks = (req, res) => {    
    res.render('shop/books', {
        path: '/books',
        books: Book.getAll(),
        isAdmin: false
    });
}

// GET /cart
exports.getCart = (req, res) => {
    res.render('shop/cart', {
        path: '/cart',
        isAdmin: false
    });
}