const { Courses } = require("../config/models/Courses");
const { Users } = require("../config/models/Users");

// Get Users method
exports.getUsers = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                role: 'USER'
            },
            include: Courses
        });
        if (!user || !user.length) {
            res.status(204).json({ error: 'No hay users en la base de datos' });
            return;
        }
        res.json(user);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get users by id method
exports.getUsersById = async (req, res) => {
    try {
        const userId = req.params['user_id'];
        const users = await Users.findAll({
            where: {
                id: userId,
                role: 'USER'
            },
            include: {
                model: Courses
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

// Update user info general
exports.updateUser = async (req, res) => {
    try {
        const userId = req.params['user_id'];
        const body = req.body;
        const user = await Users.update(
            body,
            {
                where: {
                    id: userId,
                    role: 'USER'
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

// Post user
exports.postUser = async (req, res) => {
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
            role: 'USER'
        });
        res.json({ 
            message: 'User creado!',
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

//Delete user logically
exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params['user_id'];
        const userDeleted = Users.destroy({
            where: {
                id: userId,
                role: 'USER'
            }
        });
        res.json({
            message: 'User eliminado con exito!',
            new_data: userDeleted
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
};