const express = require('express');
const fetch = require('node-fetch');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/impuesto/:id', async (req, res) => {
    const { id } = req.params;
    const response = await fetch(`${process.env.BACKEND_IP}/${id}`);
    console.log(`${process.env.BACKEND_IP}/${id}`);
    const data = await response.json();
    const importe = 20;
    const moneda = 'soles';
    res.json({ ...data, importe, moneda });
});

app.listen(5000, () => console.log('Server started on port 5000'));
