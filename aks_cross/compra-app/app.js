const express = require('express');
const fetch = require('node-fetch');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/compra/:id', async (req, res) => {
    const { id } = req.params;
    const response = await fetch(`http://fecha-app-service:4000/fecha/${id}`);
    console.log(`http://fecha-app-service:4000/fecha/${id}`);
    const data = await response.json();
    const numeroCompra = Math.floor(Math.random() * 1000);
    res.json({ ...data, numeroCompra });
});

app.listen(3000, () => console.log('Server started on port 3000'));
