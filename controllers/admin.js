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

// GET /admin/books/:id
exports.getBook = (req, res) => {
    const bookId = req.params.id;
    const book = Book.findBook(bookId);
    res.render('admin/book', {
        path: `/admin/${bookId}`,
        isAdmin: true,
        book
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
    const name = req.body.name;
    const imgUrl = req.body.imgUrl;
    const describtion = req.body.describtion;
    const price = req.body.price;
    const book = new Book(name, imgUrl, describtion, price);
    book.save();
    res.redirect('/admin/books');
}