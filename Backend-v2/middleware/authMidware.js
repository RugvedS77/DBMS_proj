require('dotenv').config();
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }

    // try {
        // const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // req.customer_id = decoded.customer_id; // Attach customer_id to request
        // next();
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) return res.sendStatus(403);
            req.user = user; // Make sure user contains `customer_id`
            next();
        });
    // } catch (err) {
    //     res.status(401).json({ message: 'Invalid token' });
    // }
};

module.exports = authMiddleware;