const jwt = require('jsonwebtoken');
const jwtAuthz = require('express-jwt-permissions');

const checkRole = (requiredRole) => {
    return (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]; // Extract the token from the authorization header

        const decodedToken = jwt.verify(token, 'trendding'); // Verify the token using your secret key
        // if (decodedToken.role === requiredRole && (req.method === 'DELETE' || req.method === 'POST')) {
        //     next(); // Allow access to the route
        // } else {
        //     res.status(401).json({ message: 'Unauthorized' }); // Return a 403 Forbidden status if the role or method is not allowed
        // }
    };
};

module.exports = checkRole;
