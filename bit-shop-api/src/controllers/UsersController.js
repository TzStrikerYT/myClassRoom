// traer el modelo de datos
const User = require("../Models/User");

// Mostrar los productos creados en la BD
const getUsers = async (req, res) => {
  const users = await User.find();
  //console.log(req.params, req.query)
  res.status(200).json(users);
};

const getOneUser = async (req, res) => {
  try {
    const id = req.params.productId;
    const user = await User.findById(id);
    res.status(200).json(user ? user : "El producto no existe");
  } catch (error) {
    res.status(200).json({ msj: "Error al consultar el id", error });
  }
};

// Crear un producto en la base de datos
const createUsers = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ status: "Usuario creado correctamente" });
    //throw
  } catch (error) {
    console.log(error);
    res.status(203).json({ status: "Usuario no creado correctamente", error });
  }
};

// Actualizar un producto en la base de datos
const updateUsers = async (req, res) => {
  try {
    const id = req.params.productId;
    const updated = await User.findByIdAndUpdate(id, { $set: req.body });
    res.status(201).json(updated);
  } catch (error) {
    res.status(201).json({ msj: "Actualizacion fallida", error });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.productId;
  await User.findByIdAndDelete(id);
  res.status(200).json({ msj: "Usurio eliminado" });
};

module.exports = {
  getUsers,
  createUsers,
  updateUsers,
  getOneUser,
  deleteUser
};
