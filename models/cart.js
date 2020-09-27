const fs = require('fs');
const path = require('path');


const cartPath = path.join(__dirname, '../data/cart.json');

class Cart {
    static addBook(id) {
        // Read cart data
        const existingCartRaw = fs.readFileSync(cartPath);
        const existingCart = JSON.parse(existingCartRaw);
        if(existingCart.books) {
            
        }
        else {
            console.log(`it works`);
        }

    }
}

module.exports = Cart;