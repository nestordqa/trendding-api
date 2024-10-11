const { Videos } = require('../config/models/Videos');

// Post course video
exports.postCourseVideo = async (req, res) => {
    const { url, courseId } = req.body;
    try {
        const newVideo = await Videos.create({
            url,
            courseId,

        });
        res.status(201).json(newVideo);
    } catch (error) {
        console.error('Error uploading video:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getCourseVideo = async (req, res) => {
    const courseId = req.params['course_id'];
    try {
        const newVideo = await Videos.findAll({
            where: {
                courseId
            }
        });
        res.status(201).json(newVideo);
    } catch (error) {
        console.error('Error uploading video:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Post lection video
exports.postLectionVideo = async (req, res) => {
    const { url, lectionId } = req.body;
    try {
        const newVideo = await Videos.create({
            url,
            lectionId,

        });
        res.status(201).json(newVideo);
    } catch (error) {
        console.error('Error uploading video:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getLectionVideo = async (req, res) => {
    const lectionId = req.params['lection_id'];
    try {
        const newVideo = await Videos.findAll({
            where: {
                lectionId
            }
        });
        res.status(201).json(newVideo);
    } catch (error) {
        console.error('Error uploading video:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
