const { Users } = require("../config/models/Users");
const { Courses } = require("../config/models/Courses");
const { Lections } = require("../config/models/Lections");
const { Categories } = require("../config/models/Categories");

const users = [
    {
        firstName: 'Nestor',
        lastName: 'Quino',
        username: 'Netito',
        password: '123456',
        email: 'email@prueba.com',
        role: 'USER'
    },
    {
        firstName: 'Nestor',
        lastName: 'Quino',
        username: 'Netito',
        password: '123456',
        email: 'em1ail@prueba.com',
        role: 'USER'
    },
    {
        firstName: 'Nestor',
        lastName: 'Quino',
        username: 'Netito',
        password: '123456',
        email: 'emai333l@prueba.com',
        role: 'USER'
    }
];

const admins = [
    {
        firstName: 'Nestor',
        lastName: 'Quino',
        username: 'Netito',
        password: '123456',
        email: 'email@praaueba.com',
        role: 'ADMIN'
    },
    {
        firstName: 'Nestor',
        lastName: 'Quino',
        username: 'Netito',
        password: '123456',
        email: 'em1aail@prueba.com',
        role: 'ADMIN'
    },
    {
        firstName: 'Nestor',
        lastName: 'Quino',
        username: 'Netito',
        password: '123456',
        email: 'emai33a3l@prueba.com',
        role: 'ADMIN'
    }
];
const date = new Date();
const courses = [
    {
        name: 'TRADING',
        modalidad: 'VIDEOS',
        description: 'Hola soy un cursito',
        date: date.getDate(),
        test: true,
        certificado: true,
    },
    {
        name: 'FOREX',
        modalidad: 'FILES',
        description: 'Hola soy un cursito',
        date: date.getDate(),
        test: true,
        certificado: true,
    },
    {
        name: 'TRADINGCITO',
        modalidad: 'VIDEOS',
        description: 'Hola soy un cursito',
        date: date.getDate(),
        test: true,
        certificado: true,
    }
];

const lecciones = [
    {
        name: 'Leccion 1',
        modalidad: 'VIDEOS',
        description: 'Soy una leccioncita',
        tipo: true,
        date: date.getDate(),
        rating: 5
    },
    {
        name: 'Leccion 2',
        modalidad: 'FILES',
        description: 'Soy una leccioncita',
        tipo: true,
        date: date.getDate(),
        rating: 4
    },
    {
        name: 'Leccion 1',
        modalidad: 'VIDEOS',
        description: 'Soy una leccioncita',
        tipo: true,
        date: date.getDate(),
        rating: 3
    }
];

const categories = [
    {
        name: 'Holis'
    },
    {
        name: 'Holisa'
    },
    {
        name: 'Holise'
    }
];

exports.runDb = async (req, res) => {
    const categoriesCreated = categories.map(async (item) => {
        try {
            const categories = await Categories.create(item);
            return categories;
        } catch (error) {
            console.error(error);
        }
    });

    const usersCreated = users.map(async (item) => {
        try {
            return await Users.create(item);
        } catch (error) {
            console.error(error);
        }
    });
    const adminCreated = admins.map(async (item) => {
        try {
            return await Users.create(item);
        } catch (error) {
            console.error(error);
        }
    });
    const coursesCreated = courses.map(async (item, idx) => {
        try {
            const course = await Courses.create(item);
            await Lections.create({
                ...lecciones[idx],
                courseId: course.dataValues.id
            });
            console.log(course.dataValues.id);
            return course;
        } catch (error) {
            console.error(error);
        }
    });
    
    res.status(200).json({
        users: usersCreated,
        admins: adminCreated,
        courses: coursesCreated,
        categories: categoriesCreated
    });
};