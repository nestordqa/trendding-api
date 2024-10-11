const { Categories } = require("./models/Categories");
const { Courses } = require("./models/Courses");
const { Images } = require("./models/Images");
const { Lections } = require("./models/Lections");
const { Teachers } = require("./models/Teachers");
const { Users } = require("./models/Users");
const { Videos } = require("./models/Videos");

//Relacion usuarios/cursos N A N
Users.belongsToMany(Courses, {
    through: 'users_courses',
    as: 'courses'
});
Courses.belongsToMany(Users, {
    through: 'users_courses',
    as: 'users'
});

//Relacion usuarios/lecciones N A N
Users.belongsToMany(Lections, {
    through: 'users_lections',
    as: 'lections'
});
Lections.belongsToMany(Users, {
    through: 'users_lections',
    as: 'users'
});


//Relacion cursos/lecciones 1 A N
Courses.hasMany(Lections, {
    as: 'lecciones',
    foreignKey: 'courseId'
});
Lections.belongsTo(Courses, { as: 'courses' });

//Relacion cursos/categorias 1 A N

Categories.hasMany(Courses, { as: 'course'});
Courses.belongsTo(Categories, { as: 'categories' });

//Relacion lecciones/categorias 1 A N

Categories.hasMany(Lections, { as: 'lection'});
Lections.belongsTo(Categories, { as: 'categories' });

//Relacion TEACHERS/categorias 1 A N

Categories.hasMany(Teachers, { as: 'teacher'});
Teachers.belongsTo(Categories, { as: 'categories' });

//RELACIONES DE IMAGENES

Courses.hasMany(Images, { as: 'images'});
Images.belongsTo(Courses, { as: 'courses' });

Teachers.hasMany(Images, { as: 'images'});
Images.belongsTo(Teachers, { as: 'teachers' });

Lections.hasMany(Images, { as: 'images'});
Images.belongsTo(Lections, { as: 'lection' });

//RELACIONES DE VIDEOS

Courses.hasMany(Videos, { as: 'videos'});
Videos.belongsTo(Courses, { as: 'courses' });

Lections.hasMany(Videos, { as: 'videos'});
Videos.belongsTo(Lections, { as: 'lection' });

//Relacion TEACHERS/courses 1 A N

Teachers.hasMany(Courses, { as: 'course'});
Courses.belongsTo(Teachers, { as: 'teacher' });

//Relacion TEACHERS/courses 1 A N

Teachers.hasMany(Lections, { as: 'lection'});
Lections.belongsTo(Teachers, { as: 'teacher' });
// Categories.belongsToMany(Courses, {
//     as: 'courses',
//     through: 'courses_categories'
// });



