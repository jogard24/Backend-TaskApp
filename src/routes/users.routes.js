// Se hace referencia a la extencion express
const express = require("express");

// De express nos traemos la funcion de router
const users = express.Router();

// .get es quien hace la solicitud a traves del navegador
users.get('/', function (req, res) {
  res.json({
    "mensaje":"Se listaran todos los Ususarios",
    "nombre": "javid",
    "años" : 2026
 })
})

// .post es la funcion quien nos ayuda a agregar elementos a nuestra base de datos
// si queremos ver lo que hay en post nos ayudamos de un programa externo (postman)
users.post('/', function (req, res) {
  res.json({
    "mensaje":"Se creara un usuario",
    "nombre": "javid",
    "años" : 2026
 })
})

//Exportamos las ruta al index.js
module.exports = users;