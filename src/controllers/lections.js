const { Lections } = require("../config/models/Lections");


// Get lection method

// Get lection by course id
exports.getLectionsById = async (req, res) => {
    try {
        const courseId = req.params['course_id'];
        const lection = await Lections.findAll({
            where: {
                courseId: courseId,
            },
        });
        if (!lection || !lection.length) {
            res.status(204).json({ error: 'No existe el empleado en al base de datos' });
            return;
        }
        res.json(lection);

    // eslint-disable-next-line no-unused-vars    
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update lection info general
exports.updateLection = async (req, res) => {
    try {
        const lectionId = req.params['lection_id'];
        const body = req.body;
        const user = await Lections.update(
            body,
            {
                where: {
                    id: lectionId,
                }
            }
        );
        res.json({
            message: 'lection modificado con exito!',
            new_data: user
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
};

// Post lection
exports.postLection = async (req, res) => {
    try {
        const courseId = req.params['course_id'];
        const { 
            name,
            modalidad,
            description,
            tipo,
            rating,
            date
        } = req.body;
        const lection = await Lections.create({
            name,
            modalidad,
            description,
            tipo,
            rating,
            date,
            courseId
        });
        res.json({ 
            message: 'Lection creado!',
            new_lection: lection
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//Delete Lection logically
exports.deleteLection = async (req, res) => {
    try {
        const lectionId = req.params['lection_id'];
        const lectionDeleted = Lections.destroy({
            where: {
                id: lectionId
            }
        });
        res.json({
            message: 'Lection eliminado con exito!',
            new_data: lectionDeleted
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
};