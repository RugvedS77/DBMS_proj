require('dotenv').config();

const user = require('../schema/user');
const jwt = require('jsonwebtoken')

const loginUser = async(req,res)=>{
    try{
        const check = await user.findOne({email: req.body.email})

        if(check && check.password === req.body.password){

            const token = jwt.sign({ customer_id: check.customerID , email: check.email}, process.env.JWT_SECRET, { expiresIn: '1h' });
            // res.json({ token });
            res.status(200).json({ message: 'Login successful',token, redirect: '/home' });
            console.log("Login success");

            console.log({token});
        } else{
            res.status(401).json({ message: 'Incorrect password or user not found' });
            console.log("failed login")
        }
    }catch (error) {
        res.status(500).json({ message: 'Server error' });
        console.log("server err")
    }
};

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if the user already exists
        const existingUserEmail = await user.findOne({ email: email });
        const existingUsername = await user.findOne({ username: username });
        
        if (existingUserEmail) {
            console.log('Email already registered');
            return res.status(400).json({ message: 'Email already registered' });
        }
        
        if (existingUsername) {
            console.log("Username already registered");
            return res.status(400).json({ message: 'Username already registered' });
        }

        // Create a new user instance
        const newUser = new user({
            username,
            email,
            password,
        });

        // Save the user (this will trigger the pre-save hook)
        await newUser.save();
        console.log("Successfully stored data");

        res.status(200).json({ message: 'Registered successfully' });
    } catch (err) {
        console.error("Error inserting the data", err);
        res.status(500).send('An error occurred');
    }
};

module.exports = { loginUser , registerUser};