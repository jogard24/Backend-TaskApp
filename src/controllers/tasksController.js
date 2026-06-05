const tasksModel = require('../models/tasksModel');

// Devuelve todas las tareas existentes
module.exports.getAllTasks = (req, res) => {
  const tasks = tasksModel.getAllTasks();
  res.json(tasks);
};

// Devuelve una tarea buscando por id
module.exports.getTaskById = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasksModel.getTaskById(id);
  if (!task) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  res.json(task);
};

// Crea una nueva tarea
module.exports.createTask = (req, res) => {
  const { title, description, assignedTo } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'El campo title es obligatorio' });
  }
  const newTask = tasksModel.createTask({ title, description, assignedTo });
  res.status(201).json(newTask);
};

// Actualiza una tarea previamente creada
module.exports.updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const updated = tasksModel.updateTask(id, req.body);
  if (!updated) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  res.json(updated);
};

// Elimina una tarea buscando por id
module.exports.deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = tasksModel.deleteTask(id);
  if (!deleted) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  res.json({ message: 'Tarea eliminada correctamente' });
};