const swaggerJSdocs = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Kmaleon API',
            version: "1.0.0"
        },
    },
    apis: ['src/routes/routes.js'],
}

const swagerSpec = swaggerJSdocs(options);

const swaggerDocs = (app, port)=> {
    app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swagerSpec));
};

module.exports = {
    swaggerDocs,
}