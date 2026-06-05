let users = [];
let nextId = 1;

// Devuelve todos los usuarios registrados
module.exports.getAllUsers = () => {
  return users;
};

// Busca un usuario por id
module.exports.getUserById = (id) => {
  return users.find((user) => user.id === id);
};

// Crea un nuevo usuario
module.exports.createUser = (data) => {
  const newUser = {
    id: nextId++,
    name: data.name,
    email: data.email,
    taskIds: [],
  };
  users.push(newUser);
  return newUser;
};

// Actualiza los campos de un suario que ya este creado
module.exports.updateUser = (id, data) => {
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) return null;
  users[index] = Object.assign(users[index], data);
  return users[index];
};

// Elimina un usuario
module.exports.deleteUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
};