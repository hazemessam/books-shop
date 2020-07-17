// Node modules
const express = require('express');
// App modules
const {books} = require('./admin');


const router = express.Router();

router.get('/', (req, res) => {
    res.render('shop', {path: '/'});
});

router.get('/books', (req, res) => {
    res.render('books', {path: '/books', books});
});

module.exports = router;
