const { Categories } = require("./models/Categories");
const { Courses } = require("./models/Courses");
const { Lections } = require("./models/Lections");
const { Users } = require("./models/Users");

//Relacion usuarios/cursos N A N
Users.belongsToMany(Courses, {
    through: 'users_courses'
});
Courses.belongsToMany(Users, {
    through: 'users_courses'
});

//Relacion cursos/lecciones 1 A N
Courses.hasMany(Lections, {
    as: 'lecciones',
    foreignKey: 'courseId'
});
Lections.belongsTo(Courses, { as: 'course' });

//Relacion cursos/categorias N A N
Courses.hasMany(Categories, {
    as: 'categories',
});
// Categories.belongsToMany(Courses, {
//     as: 'courses',
//     through: 'courses_categories'
// });


