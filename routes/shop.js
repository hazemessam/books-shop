const express = require('express');
const booksController = require('../controllers/books');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('shop', {path: '/'});
});

router.get('/books', booksController.getBooks);

module.exports = router;
