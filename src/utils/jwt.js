const jwt = require('jsonwebtoken');

//Funcioon para generar JWT para autenticar peticiones a partir del login
const generateToken = (login_data) => {
    //Genera token con 1 hora de expiracion
    return jwt.sign({ data: login_data }, 'trendding', { expiresIn: '1h' });
};

module.exports = {
    generateToken
};