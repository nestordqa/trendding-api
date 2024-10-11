const { Categories } = require("../config/models/Categories");
const { Courses } = require("../config/models/Courses");
const { Images } = require("../config/models/Images");
const { Lections } = require("../config/models/Lections");
const { Teachers } = require("../config/models/Teachers");


// Get Courses method
exports.getTeachers = async (req, res) => {
    try {
        const course = await Teachers.findAll({
            include: [
                {
                    model: Images,
                    as: 'images'
                },
                {
                    model: Courses,
                    as: 'course'
                },
                {
                    model: Lections,
                    as: 'lection'
                },
                {
                    model: Categories,
                    as: 'categories'
                },
            ]
        });
        if (!course || !course.length) {
            res.status(204).json({ error: 'No hay teachers en la base de datos' });
            return;
        }
        res.json(course);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get Courses by id method
exports.getTeachersById = async (req, res) => {
    try {
        const courseId = req.params['teacher_id'];
        const course = await Teachers.findAll({
            where: {
                id: courseId,
            },
            include: [
                {
                    model: Images,
                    as: 'images'
                },
                {
                    model: Courses,
                    as: 'course'
                },
                {
                    model: Lections,
                    as: 'leccion'
                },
                {
                    model: Categories,
                    as: 'categories'
                },
            ]
        });
        if (!course || !course.length) {
            res.status(204).json({ error: 'No existe el empleado en al base de datos' });
            return;
        }
        res.json(course);

    // eslint-disable-next-line no-unused-vars    
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update course info general
exports.updateTeacher = async (req, res) => {
    try {
        const courseId = req.params['teacher_id'];
        const body = req.body;
        const user = await Teachers.update(
            body,
            {
                where: {
                    id: courseId,
                }
            }
        );
        res.json({
            message: 'Course modificado con exito!',
            new_data: user
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
};

// Post course
exports.postTeacher = async (req, res) => {
    try {
        const { 
            name,
            description,
            active,
            phone,
            document,
            email,
            especialidad,
            categoriesId
        } = req.body;
        const course = await Teachers.create({
            name,
            description,
            active,
            phone,
            document,
            email,
            especialidad,
            categoriesId
        });
        res.json({ 
            message: 'course creado!',
            new_admin: course
        });
    } catch (error) {
        if (error) {
            console.log(error);
            res.status(208).json({ error });
            return;
        }
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//Delete course logically
exports.deleteTeacher = async (req, res) => {
    try {
        const courseId = req.params['teacher_id'];
        const courseDeleted = await Teachers.update(
            {
                active: false
            },
            {
                where: {
                    id: courseId,
                }
            }
        );
        res.json({
            message: 'Course eliminado con exito!',
            new_data: courseDeleted
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
};