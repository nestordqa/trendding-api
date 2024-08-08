const { Categories } = require("./models/Categories");
const { Courses } = require("./models/Courses");
const { Lections } = require("./models/Lections");
const { Tags } = require("./models/Tags");
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
Courses.belongsToMany(Categories, {
    as: 'categories',
    through: 'courses_categories'
});
Categories.belongsToMany(Courses, {
    as: 'courses',
    through: 'courses_categories'
});

//Relacion lecciones/categorias N A N
Lections.belongsToMany(Categories, {
    through: 'lections_categories',
    as: 'categories'
});
Categories.belongsToMany(Lections, {
    through: 'lections_categories',
    as: 'lections'
});

//Relacion tags/courses N A N
Courses.belongsToMany(Tags, {
    through: 'courses_tags',
    as: 'tags'
});
Tags.belongsToMany(Courses, {
    through: 'courses_tags',
    as: 'courses'
});

