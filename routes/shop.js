const express = require('express');
const booksController = require('../controllers/books');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('shop/welcome-page', {path: '/'});
});

router.get('/books', booksController.getBooks);

router.get('/cart', booksController.getCart);

module.exports = router;
