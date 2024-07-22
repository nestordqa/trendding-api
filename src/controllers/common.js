const { queryDB } = require("../config/config");
const { generateToken } = require("../utils/jwt");

// Login method
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await queryDB(`
            SELECT * FROM users WHERE email = '${email}' AND password = '${password}'
        `);
        if (!user || !user.rows || !user.rows.length) res.status(404).json({ error: 'Usuario no encontrado' });
        res.json(generateToken(user.rows));

    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};