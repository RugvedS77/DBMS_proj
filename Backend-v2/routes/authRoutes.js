const express = require('express');
const router = express.Router();
const path = require('path')
const { loginUser , registerUser } = require('../controller/authController');

const buildPath = path.join(__dirname, '../../e-commerce/public');

router.get('/login',(req,res)=>{
    res.sendFile(path.join(buildPath,'index.html'))
    // res.render('login')
});

router.get('/register', (req, res) => {
    //res.render('register'); // Render the register.ejs view
    res.sendFile(path.join(buildPath,'index.html'))
});

router.post('/login',loginUser);

router.post('/register',registerUser);

module.exports = router;