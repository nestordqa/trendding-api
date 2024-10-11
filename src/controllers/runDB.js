const { Users } = require("../config/models/Users");
// const { Courses } = require("../config/models/Courses");
// const { Lections } = require("../config/models/Lections");
// const { Categories } = require("../config/models/Categories");
// const { Teachers } = require("../config/models/Teachers");

// const users = [
//     {
//         firstName: 'Nestor',
//         lastName: 'Quino',
//         username: 'Netito',
//         password: '123456',
//         email: 'email@prueba.com',
//         role: 'USER'
//     },
//     {
//         firstName: 'Nestor',
//         lastName: 'Quino',
//         username: 'Netito',
//         password: '123456',
//         email: 'em1ail@prueba.com',
//         role: 'USER'
//     },
//     {
//         firstName: 'Nestor',
//         lastName: 'Quino',
//         username: 'Netito',
//         password: '123456',
//         email: 'emai333l@prueba.com',
//         role: 'USER'
//     }
// ];

const admins = [
    {
        firstName: 'Nestor',
        lastName: 'Quinones',
        username: 'Nestordqa',
        password: '123456',
        email: 'admin@trendding.com',
        role: 'ADMIN'
    },
];
// const date = new Date();
// const courses = [
//     {
//         name: 'TRADING',
//         modalidad: 'VIDEOS',
//         description: 'Hola soy un cursito',
//         date: date.getDate(),
//         test: true,
//         certificado: true,
//         hour: '',
//         students: 5,
//         lectionsNumber: 5,
//         hours: 5
//     },
//     {
//         name: 'FOREX',
//         modalidad: 'FILES',
//         description: 'Hola soy un cursito',
//         date: date.getDate(),
//         test: true,
//         certificado: true,
//         hour: '',
//         students: 5,
//         lectionsNumber: 5,
//         hours: 5
//     },
//     {
//         name: 'TRADINGCITO',
//         modalidad: 'VIDEOS',
//         description: 'Hola soy un cursito',
//         date: date.getDate(),
//         test: true,
//         certificado: true,
//         hour: '',
//         students: 5,
//         lectionsNumber: 5,
//         hours: 5
//     }
// ];


exports.runDb = async (req, res) => {
    // const categoriesCreated = categories.map(async (item) => {
    //     try {
    //         const categories = await Categories.create(item);
    //         return categories;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // });

    // const usersCreated = users.map(async (item) => {
    //     try {
    //         return await Users.create(item);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // });
    const adminCreated = admins.map(async (item) => {
        try {
            return await Users.create(item);
        } catch (error) {
            console.error(error);
        }
    });
    // const coursesCreated = courses.map(async (item, idx) => {
    //     try {
    //         // console.log(categories.indexOf(categories[idx]), 'SOY EL INDICEEEEEEE');
    //         const course = await Courses.create({
    //             ...item,
    //             categoriesId: categories.indexOf(categories[idx])
    //         });
    //         await Lections.create({
    //             ...lecciones[idx],
    //             courseId: course.dataValues.id
    //         });
    //         // console.log(course, 'HOLIIIIIIIIS');
    //         return course;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // });

    // const profes = teachers.map(async (item, idx) => {
    //     console.log(categories[idx]);
    //     // try {
    //     //     // console.log(categories.indexOf(categories[idx]), 'SOY EL INDICEEEEEEE');
    //     //     const course = await Teachers.create({
    //     //         ...item,
    //     //         categoriesId: categories.indexOf(categories[idx+1])
    //     //     });
    //     //     // console.log(course, 'HOLIIIIIIIIS');
    //     //     return course;
    //     // } catch (error) {
    //     //     console.error(error);
    //     // }
    // });
    
    res.status(200).json({
        // users: usersCreated,
        admins: adminCreated,
        // courses: coursesCreated,
        // categories: categoriesCreated,
        // profes
    });
};