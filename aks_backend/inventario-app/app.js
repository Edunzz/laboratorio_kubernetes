const express = require('express');
const mysql = require('mysql');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const db = mysql.createConnection({
    host: 'mysql-service', 
    user: 'root',
    password: 'password',
    database: 'inventario_db'
});

db.connect((err) => {
    if(err) throw err;
    console.log('Connected to database');
});

app.get('/', (req, res) => {
    let sql = 'SELECT * FROM inventario';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
    });
});

app.get('/:id', (req, res) => {
    let sql = 'SELECT * FROM inventario WHERE id = ' + req.params.id;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
