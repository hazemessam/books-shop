const Book = require('../models/book');
const Cart = require('../models/cart');


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
    if (!book) {
        res.render('404', {
            path: null,
            isAdmin: false
        })
    }
    else {
        res.render('shop/book', {
            path: null,
            isAdmin: false,
            book
        });      
    }
}

// GET /cart
exports.getCart = (req, res) => {
    res.render('shop/cart', {
        path: '/cart',
        isAdmin: false
    });
}

// POST /cart
exports.postCart = (req, res) => {
    const bookId = req.body.id;
    console.log(bookId);
    Cart.addBook(bookId);
    res.redirect('/cart');
}