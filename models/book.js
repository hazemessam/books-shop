const fs = require('fs');
const path = require('path');


const booksPath = path.join(__dirname, '../data/books.json');

const getBooks = () => {
    let booksData = fs.readFileSync(booksPath).toString();
    let books = [];
    if (booksData.length > 0)
        books = JSON.parse(booksData);
    return books;
}

class Book {
    constructor(name, imgUrl, describtion, price) {
        this.name = name;
        this.imgUrl = imgUrl;
        this.describtion = describtion;
        this.price = price;
    }

    save() {
        const books = getBooks();
        books.push(this);
        fs.writeFileSync(booksPath, JSON.stringify(books));
    }

    static getAll() {
        const books = getBooks();
        return books;
    }
}

module.exports = Book;