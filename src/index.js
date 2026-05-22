const express = require('express')

// Creo una constante haciendo referencia al archivo de la ruta
const tasks = require('./routes/tasks.routes.js');

const users = require('./routes/users.routes.js');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.json({
    "mensaje":"hallooooooo",
    "nombre": "javid",
    "años" : 2026
 })
})

// Se llama la o las rutas del archivo
app.use('/tasks', tasks);

app.use('/users' , users);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})