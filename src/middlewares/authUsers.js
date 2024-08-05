const jwt = require('jsonwebtoken');

function isTokenExpired(token) {
    const jwtPayload = JSON.parse(atob(token.split('.')[1]));
    const now = Math.floor(Date.now() / 1000);
    return jwtPayload.exp < now;
}

function verifyUsersToken (req, res, next) {

    const token = req.header('Authorization');

    if (!token) return res.status(401).json({ error: 'Access denied, empty JWT' });
    try {
        const decoded = jwt.verify(token, 'trendding');
        req.data = decoded.data;
        if (isTokenExpired(token)) {
            res.status(401).json({ error: 'JWT expired' });
            return;
        }
        next();
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
        return;
    }
};

module.exports = verifyUsersToken;