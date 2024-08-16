const { Categories } = require("../config/models/Categories");


// Get all tags method
exports.getCategories = async (req, res) => {
    try {
        const categories = await Categories.findAll();
        if (!categories || !categories.length) {
            res.status(204).json({ error: 'No existe el tag en al base de datos' });
            return;
        }
        res.json(categories);

    // eslint-disable-next-line no-unused-vars    
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Post tag
exports.postCategorie = async (req, res) => {
    try {
        const { 
            name
        } = req.body;
        const tag = await Categories.create({
            name
        });
        res.json({ 
            message: 'Categorie creado!',
            new_lection: tag
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//Delete tag
exports.deleteCategorie = async (req, res) => {
    try {
        const categorieId = req.params['categorie_id'];
        const categorieDeleted = Categories.destroy({
            where: {
                id: categorieId
            }
        });
        res.json({
            message: 'categorie eliminado con exito!',
            new_data: categorieDeleted
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
};