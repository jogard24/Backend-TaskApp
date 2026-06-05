const userModel = require('./userModel');

let tasks = [];
let nextId = 1;

// Devuelve todas las tareas
module.exports.getAllTasks = () => {
  return tasks;
};

// Busca la tarea por su id
module.exports.getTaskById = (id) => {
  return tasks.find((task) => task.id === id);
};

// Crea una nueva tarea con id titulo y descripcion
module.exports.createTask = (data) => {
  const newTask = {
    id: nextId++,
    title: data.title,
    description: data.description || '',
    assignedTo: [],
  };

  if (data.assignedTo && Array.isArray(data.assignedTo)) {
    data.assignedTo.forEach((userId) => {
      const user = userModel.getUserById(userId);
      if (user) {
        newTask.assignedTo.push(userId);
        user.taskIds.push(newTask.id);
      }
    });
  }

  tasks.push(newTask);
  return newTask;
};

// Actualiza los campos de una tarea existente
module.exports.updateTask = (id, data) => {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) return null;

  const task = tasks[index];

  if (data.assignedTo && Array.isArray(data.assignedTo)) {
    task.assignedTo.forEach((userId) => {
      const user = userModel.getUserById(userId);
      if (user) {
        user.taskIds = user.taskIds.filter((tid) => tid !== task.id);
      }
    });

    task.assignedTo = [];
    data.assignedTo.forEach((userId) => {
      const user = userModel.getUserById(userId);
      if (user) {
        task.assignedTo.push(userId);
        user.taskIds.push(task.id);
      }
    });

    delete data.assignedTo;
  }

  tasks[index] = Object.assign(task, data);
  return tasks[index];
};

// Elimina la tarea de los usuarios que la tenian asignada
module.exports.deleteTask = (id) => {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) return false;

  const task = tasks[index];

  task.assignedTo.forEach((userId) => {
    const user = userModel.getUserById(userId);
    if (user) {
      user.taskIds = user.taskIds.filter((tid) => tid !== task.id);
    }
  });

  tasks.splice(index, 1);
  return true;
};

// Devuelve todas las tareas asignadas a un usuario
module.exports.getTasksByUser = (userId) => {
  return tasks.filter((task) => task.assignedTo.includes(userId));
};