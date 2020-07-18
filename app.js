// Node modules
const express = require('express');

// App modules
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorsController =require('./controllers/errors');


const app = express();

app.set('view engine', 'ejs');  // Set the templete engine
app.set('views','./views');  // Set the views folder
app.use(express.static('./public'));  // Set the static files path
app.use(express.urlencoded({'extended': false}));  // Parse the req body

// log requests to the console
app.use((req, res, next) => {
    console.log(`${req.method}  ${req.url}`);
    next();
});

app.use('/admin', adminRoutes);  // Handle admin routs
app.use(shopRoutes);  // Handle shop routs

// Handle test route
app.get('/test', (req, res) => {
    res.send(`<h2 style="font-family: arial; text-align: center; padding-top: 200px">Welcome to test page</h2>`);
});

// Handle not found routs
app.use(errorsController.get404);

const port = 8080;
app.listen(port, (req, res) => {
    console.log(`Start listening to port ${port}...`);
});
