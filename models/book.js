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
        this.id = Math.random().toString();
        const books = getBooks();
        books.push(this);
        fs.writeFileSync(booksPath, JSON.stringify(books));
    }

    static getAll() {
        const books = getBooks();
        return books;
    }

    static findBook(bookId) {
        const books = getBooks();
        for (let book of books)
            if (book.id === bookId)
                return book;
        return null;
    }
}

module.exports = Book;