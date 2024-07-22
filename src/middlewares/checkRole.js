const jwt = require('jsonwebtoken');
// eslint-disable-next-line no-unused-vars
const checkRole = (requiredRole) => {
    return (req) => {
        const token = req.headers.authorization.split(' ')[1]; // Extract the token from the authorization header
        // eslint-disable-next-line no-unused-vars
        const decodedToken = jwt.verify(token, 'trendding'); // Verify the token using your secret key
        // if (decodedToken.role === requiredRole && (req.method === 'DELETE' || req.method === 'POST')) {
        //     next(); // Allow access to the route
        // } else {
        //     res.status(401).json({ message: 'Unauthorized' }); // Return a 403 Forbidden status if the role or method is not allowed
        // }
    };
};

module.exports = checkRole;
