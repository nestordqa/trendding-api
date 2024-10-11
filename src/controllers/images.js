const { Images } = require('../config/models/Images');

// Post course image
exports.postCourseImage = async (req, res) => {
    const { url, coursesId } = req.body;
    try {
        const newImage = await Images.create({
            url,
            coursesId,

        });
        res.status(201).json(newImage);
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getCourseImage = async (req, res) => {
    const coursesId = req.params['course_id'];
    try {
        const newImage = await Images.findAll({
            where: {
                coursesId
            }
        });
        res.status(201).json(newImage);
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Post lection image
exports.postLectionImage = async (req, res) => {
    const { url, lectionId } = req.body;
    try {
        const newImage = await Images.create({
            url,
            lectionId,

        });
        res.status(201).json(newImage);
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getLectionImage = async (req, res) => {
    const lectionId = req.params['lection_id'];
    try {
        const newImage = await Images.findAll({
            where: {
                lectionId
            }
        });
        res.status(201).json(newImage);
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Post lection image
exports.postTeacherImage = async (req, res) => {
    const { url, teachersId } = req.body;
    try {
        const newImage = await Images.create({
            url,
            teachersId,

        });
        res.status(201).json(newImage);
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getTeacherImage = async (req, res) => {
    const teachersId = req.params['teacher_id'];
    try {
        const newImage = await Images.findAll({
            where: {
                teachersId
            }
        });
        res.status(201).json(newImage);
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};