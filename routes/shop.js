// Node modules
const express = require('express');
// App modules
const adminData = require('./admin');


const router = express.Router();

router.get('/', (req, res) => {
    res.render('shop');
});

router.get('/books', (req, res) => {
    const books = adminData.books;
    res.render('books', {books});
});

module.exports = router;
