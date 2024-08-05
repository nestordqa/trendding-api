const { Courses } = require("./models/Courses");
const { Users } = require("./models/Users");

//Relacion usuarios/cursos N A N
Users.belongsToMany(Courses, {
    through: 'users_courses'
});
Courses.belongsToMany(Users, {
    through: 'users_courses'
});
