const fs = require('fs');
const path = require('path');


const booksPath = path.join(__dirname, '../data/books.json');
const dumpDescribtion ='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor dolore vel, eius repellat voluptatum doloremque non, optio nisi, quaerat facere odio autem deleniti! Id et hic saepe? In, praesentium sequi.';

const getBooks = () => {
    let booksData = fs.readFileSync(booksPath).toString();
    let books = [];
    if (booksData.length > 0)
        books = JSON.parse(booksData);
    return books;
}

const updateBooks = books => {
    fs.writeFileSync(booksPath, JSON.stringify(books));
}

class Book {
    constructor(name, imgUrl, describtion, price) {
        this.name = name;
        this.imgUrl = imgUrl;
        this.describtion = describtion.length ? describtion : dumpDescribtion;
        this.price = price;
    }

    save() {
        this.id = Math.random().toPrecision(10).toString().replace('0', 'book');
        const books = getBooks();
        books.push(this);
        updateBooks(books);
    }

    static getAll() {
        const books = getBooks();
        return books;
    }

    static findBook(bookId) {
        const books = getBooks();
        const book = books.find(book => book.id === bookId);
        return book;
    }

    static delBook(bookId) {
        let books = getBooks();
        books = books.filter(book => book.id != bookId);
        updateBooks(books);
    }
}

module.exports = Book;