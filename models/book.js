const fs = require('fs');
const path = require('path')


const booksPath = path.join(__dirname, '../Data/books.json');

class Book {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    save() {
        let booksData = fs.readFileSync(booksPath).toString();
        let books = [];
        if (booksData.length > 0)
            books = JSON.parse(booksData);
        books.push(this);
        fs.writeFileSync(booksPath, JSON.stringify(books));
    }

    static getAll() {
        const booksData = fs.readFileSync(booksPath).toString();
        let books = [];
        if (booksData.length > 0)
            books = JSON.parse(booksData);
        return books;
    }
}

module.exports = Book;