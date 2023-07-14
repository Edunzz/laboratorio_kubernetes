const express = require('express');
const fetch = require('node-fetch');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/fecha/:id', async (req, res) => {
    const { id } = req.params;
    const response = await fetch(`http://impuesto-app-service:5000/impuesto/${id}`);
    const data = await response.json();
    const fecha = new Date();
    res.json({ ...data, fecha });
});

app.listen(4000, () => console.log('Server started on port 4000'));
