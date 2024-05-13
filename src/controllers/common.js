const { queryDB } = require("../config/config");
const { generateToken } = require("../utils/jwt");

// Login method
exports.login = async (req, res) => {
    try {
        const { ema_usu, pass_usu } = req.body;
        const user = await queryDB(`
            SELECT * FROM users WHERE ema_usu = '${ema_usu}' AND pass_usu = '${pass_usu}'
        `);
        if (!user || !user.rows || !user.rows.length) res.status(404).json({ error: 'Usuario no encontrado' });
        res.json(generateToken(user.rows));
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};