const { Users } = require("../config/models");

// Get admins method
exports.getAdmins = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                role: 'ADMIN'
            }
        });
        if (!user || !user.length) res.status(204).json({ error: 'No hay admins en la base de datos' });
        res.json(user);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get admin by id method
exports.getAdminsById = async (req, res) => {
    try {
        const userId = req.params['user_id'];
        const users = await Users.findAll({
            where: {
                id: userId
            }
        });
        if (!users || !users.length) {
            res.status(204).json({ error: 'No existe el empleado en al base de datos' });
            return;
        }
        res.json(users);

    // eslint-disable-next-line no-unused-vars    
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update admin info general
exports.updateAdmin = async (req, res) => {
    try {
        const userId = req.params['user_id'];
        const body = req.body;
        const user = await Users.update(
            body,
            {
                where: {
                    id: userId
                }
            }
        );
        res.json({
            message: 'Empleado modificado con exito!',
            new_data: user
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
};

// Post admins
exports.postAdmins = async (req, res) => {
    try {
        const { 
            firstName,
            lastName,
            username, 
            password, 
            email 
        } = req.body;
        const user = await Users.create({
            firstName,
            lastName,
            username,
            email,
            password,
            role: 'ADMIN'
        });
        res.json({ 
            message: 'Admin creado!',
            new_admin: user
        });
    } catch (error) {
        if (error && error.errors[0] && error.errors[0].message) {
            res.status(208).json({ error: error.errors[0].message });
            return;
        }
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//Delete employees logically
exports.deleteAdmin = async (req, res) => {
    try {
        const userId = req.params['user_id'];
        const userDeleted = Users.destroy({
            where: {
                id: userId
            }
        });
        res.json({
            message: 'Admin eliminado con exito!',
            new_data: userDeleted
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
};