const jwt = require('jsonwebtoken');

function verifyToken (req, res, next) {

    const token = req.header('Authorization');

    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        const decoded = jwt.verify(token, 'trendding');
        req.data = decoded.data;
        if ((req.method === 'POST' || req.method === 'DELETE') && req.data[0].role !== 'ADMIN') {
            res.status(401).json({ error: 'Access denied' });
        }
        next();
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = verifyToken;