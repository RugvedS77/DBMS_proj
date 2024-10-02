const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors');
const connectDB = require('./db/mongodb')
const authRoutes = require('./routes/authRoutes')
const prodRoutes =require('./routes/prodRoutes')
const homeRoutes = require('./routes/homeRoutes')
const cartRoutes = require('./routes/cartRoutes')
const payRoutes = require('./routes/payRoutes')
const profileRoutes = require('./routes/profileRoutes')
require('dotenv').config();

// Increase the default max listeners
require('events').EventEmitter.defaultMaxListeners = 20;

const publicPath = path.join(__dirname, '../e-commerce/public');
// const viewsPath = path.join(__dirname, 'views');
// Serve static files from the Vite build directory

connectDB();

// Apply CORS middleware
app.use(cors({
    origin: 'http://localhost:5173', // React's default port
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));


app.use(express.json({limit : "10mb"}))
app.use(express.urlencoded({extended:false}))

app.use(express.static(publicPath))


app.use('/auth',authRoutes);
app.use('/product', prodRoutes);
app.use('/', homeRoutes);
app.use('/cart', cartRoutes);
app.use('/payment', payRoutes);
app.use('/profile', profileRoutes);

// app.set('view engine', 'ejs'); // Change 'ejs' to the view engine you are using
// app.set('views',viewsPath);

// Route to serve the product images page
// app.get('/product-images', (req, res) => {
//     res.render('product');
// });

// Catch-all route to serve React app
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'), (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(err.status).end();
        }
    });
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}...`)
})