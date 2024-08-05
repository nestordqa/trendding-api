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

//Relacion cursos/lecciones N A N
Courses.hasMany(Lections, {
    as: 'lecciones',
    foreignKey: 'courseId'
});
Lections.belongsTo(Courses, { as: 'course' });
