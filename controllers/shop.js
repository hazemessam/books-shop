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
        isAdmin: false,
        books: Book.getAll()
    });
}

// GET /books/:id
exports.getBook = (req, res) => {
    const bookId = req.params.id;
    const book = Book.findBook(bookId);
    res.render('shop/book', {
        path: `/books/${bookId}`,
        isAdmin: false,
        book
    });
}

// GET /cart
exports.getCart = (req, res) => {
    res.render('shop/cart', {
        path: '/cart',
        isAdmin: false
    });
}