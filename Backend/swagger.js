const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger config options
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Inventory Management API',
      version: '1.0.0',
      description: 'API docs for FiMoney Inventory backend',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 8080}`, //8080 I have set as PORT number
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  // location of all the routes files Swagger UI has to display
  apis: ['./routes/productRoutes.js', './routes/authRoutes.js', './routes/adminRoutes.js'], 
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };
