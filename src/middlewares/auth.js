const jwt = require('jsonwebtoken');

function verifyToken (req, res, next) {

    const token = req.header('Authorization');

    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        const decoded = jwt.verify(token, 'kmaleon');
        req.data = decoded.data;
        if ((req.method === 'POST' || req.method === 'DELETE') && req.data[0].role === 'EMPLOYEE') {
            res.status(401).json({ error: 'Access denied' });
        }
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = verifyToken;