const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'juan',
    database: 'CrudReact'
});

// Ruta para obtener todos los estudiantes
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM estudiantes';
    db.query(sql, (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error en la consulta', error: err });
        }
        return res.json(data);
    });
});

// Ruta para crear un estudiante
app.post('/create', (req, res) => {
    const sql = 'INSERT INTO estudiantes (Name, Email) VALUES (?, ?)';
    const values = [
        req.body.name,
        req.body.email
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al insertar el estudiante', error: err });
        }
        return res.status(200).json({ message: 'Estudiante insertado con éxito', result });
    });
});

app.put('/update/:id', (req, res) => {
    const sql = 'update estudiantes set Name = ?, Email = ? where Id = ?';
    const values = [
        req.body.name,
        req.body.email
    ];
    const id = req.params.id;

    db.query(sql,[ ...values, id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al insertar el estudiante', error: err });
        }
        return res.status(200).json({ message: 'Estudiante Actualizado con éxito', result });
    });
});

app.delete('/studentn/:id', (req, res) => {
    const sql = 'delete from estudiantes where Id = ?';
    
    const id = req.params.id;

    db.query(sql,[id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al insertar el estudiante', error: err });
        }
        return res.status(200).json({ message: 'Estudiante Eliminado con éxito', result });
    });
});

// Inicia el servidor
app.listen(8081, () => {
    console.log('Listening on port 8081');
});
