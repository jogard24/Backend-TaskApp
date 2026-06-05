// Se hace referencia a la extencion express
const express = require("express");

// De express nos traemos la funcion de router
const tasks = express.Router();

// // .get es quien hace la solicitud a traves del navegador
// tasks.get('/', function (req, res) {
//   res.json({
//     "mensaje":"Se listaran todos las tareas ",
//     "nombre": "javid",
//     "años" : 2026
//  })
// })

// // .post es la funcion quien nos ayuda a agregar elementos a nuestra base de datos
// // si queremos ver lo que hay en post nos ayudamos de un programa externo (postman)
// tasks.post('/', function (req, res) {
//   res.json({
//     "mensaje":"Se creara una tarea",
//     "nombre": "javid",
//     "años" : 2026
//  })
// })


const tasksController = require('../controllers/tasksController');

// GET: Lista todas las tareas
tasks.get('/', tasksController.getAllTasks);

// GET: Tarea especifica por id
tasks.get('/:id', tasksController.getTaskById);

// POST: Crea una tarea nueva
tasks.post('/', tasksController.createTask);

// PUT: Actualiza una tarea existente
tasks.put('/:id', tasksController.updateTask);

// DELETE: Elimina una tarea
tasks.delete('/:id', tasksController.deleteTask);

// //Exportamos las ruta al index.js
module.exports = tasks;