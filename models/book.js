const fs = require('fs');
const path = require('path')


const booksPath = path.join(__dirname, '../Data/books.json');

class Book {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    save() {
        fs.readFile(booksPath, (err, fileContent) => {
            let books = [];
            if (!err) {
                books = JSON.parse(fileContent);
            }
            books.push(this);
            fs.writeFile(booksPath, JSON.stringify(books), (err) => {
                console.log(err);
            });
        });
    }

    static getAll() {
        fs.readFile(booksPath, (err, fileContent) => {
            if (err) {
                return [];
            }
            return JSON.parse(fileContent);
        });
    }
}

module.exports = Book;