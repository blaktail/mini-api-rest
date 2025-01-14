const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
            info: {
            title: 'Documentacion Mini Api Rest',
            version: '1.0.0',
            },
        },
  apis: ['src/routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options)

const swaggerDocs = (app,port) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}

module.exports = { swaggerDocs }