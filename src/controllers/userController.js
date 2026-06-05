const userModel = require('../models/userModel');
const tasksModel = require('../models/tasksModel');

// Devuelve todos los usuarios registrados
module.exports.getAllUsers = (req, res) => {
  const users = userModel.getAllUsers();
  res.json(users);
};

// Devuelve un usuario buscando por id
module.exports.getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = userModel.getUserById(id);
  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json(user);
};

// Crea un nuevo usuario
module.exports.createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Los campos name y email son obligatorios' });
  }
  const newUser = userModel.createUser({ name, email });
  res.status(201).json(newUser);
};

// Actualiza los datos de un usuario existente
module.exports.updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const updated = userModel.updateUser(id, req.body);
  if (!updated) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json(updated);
};

// Elimina un usuario del sistema buscando por id
module.exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = userModel.deleteUser(id);
  if (!deleted) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json({ message: 'El usuario ha sido eliminado correctamente' });
};

// Devuelve todas las tareas asignadas a un usuario
module.exports.getUserTasks = (req, res) => {
  const id = parseInt(req.params.id);
  const user = userModel.getUserById(id);
  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  const tasks = tasksModel.getTasksByUser(id);
  res.json({
    userId: user.id,
    userName: user.name,
    tasks: tasks.map((task) => ({
      id: task.id,
      title: task.title,
      description: task.description,
    })),
  });
};