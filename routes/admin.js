const express = require('express');


const books = []

const router = express.Router();

router.get('/add-book', (req, res) => {
    res.render('add-book');
});

router.post('/add-book', (req, res) => {
    books.push(req.body);
    res.redirect('/');
});

module.exports = {
    routes: router,
    books
};