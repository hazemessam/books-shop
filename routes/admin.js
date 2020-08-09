const express = require('express');
const adminController = require('../controllers/admin');


const router = express.Router();

router.get('/', adminController.getIndex)

router.get('/books', adminController.getBooks);

router.get('/books/:id', adminController.getBook);

router.get('/add-book', adminController.getAddBook);

router.post('/add-book', adminController.postAddBook);

router.delete('/del-book/:id', adminController.deleteBook);

module.exports = router