const { Courses } = require("../config/models/Courses");
const { Lections } = require("../config/models/Lections");


// Get Courses method
exports.getCourses = async (req, res) => {
    try {
        const course = await Courses.findAll({
            include: {
                model: Lections,
                as: 'lecciones'
            }
        });
        if (!course || !course.length) {
            res.status(204).json({ error: 'No hay curses en la base de datos' });
            return;
        }
        res.json(course);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get Courses by id method
exports.getCoursesById = async (req, res) => {
    try {
        const courseId = req.params['course_id'];
        const course = await Courses.findAll({
            where: {
                id: courseId,
            },
            include: {
                model: Lections,
                as: 'lecciones'
            }
        });
        if (!course || !course.length) {
            res.status(204).json({ error: 'No existe el empleado en al base de datos' });
            return;
        }
        res.json(course);

    // eslint-disable-next-line no-unused-vars    
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update course info general
exports.updateCourse = async (req, res) => {
    try {
        const courseId = req.params['course_id'];
        const body = req.body;
        const user = await Courses.update(
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
exports.postCourse = async (req, res) => {
    try {
        const { 
            name,
            modalidad,
            description,
            date,
            test,
            certificado
        } = req.body;
        const course = await Courses.create({
            name,
            modalidad,
            description,
            date,
            test,
            certificado
        });
        res.json({ 
            message: 'course creado!',
            new_admin: course
        });
    } catch (error) {
        if (error && error.errors[0] && error.errors[0].message) {
            res.status(208).json({ error: error.errors[0].message });
            return;
        }
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//Delete course logically
exports.deleteCourse = async (req, res) => {
    try {
        const courseId = req.params['course_id'];
        const courseDeleted = Courses.destroy({
            where: {
                id: courseId
            }
        });
        res.json({
            message: 'Course eliminado con exito!',
            new_data: courseDeleted
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
};