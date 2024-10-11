const { Users } = require("../config/models/Users");
const { generateToken } = require("../utils/jwt");

// Login method
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findAll({
            where: {
                email,
                password
            }
        });
        if (!user || !user.length) return res.status(404).json({ error: 'Usuario no encontrado' });
        res.json(generateToken(user));

    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};