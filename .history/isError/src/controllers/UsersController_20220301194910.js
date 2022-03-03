// traer el modelo de datos
const User = require("../Models/User");
const jwt = require("jsonwebtoken");

// Mostrar los productos creados en la BD
const getUsers = async (req, res) => {
  const users = await User.find();
  //console.log(req.params, req.query)
  res.status(200).json(users);
};

const getOneUser = async (req, res) => {
  const friday = "friday"
  try {
    const id = req.params.userId;
    const user = await User.findById(id);
     res.status(200).json(user ? user : "El producto no existe");
  } catch (error) {
    res.status(200).json({ msj: "Error al consultar el id", error });
  }
  friday = "saturday"
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
    res.status(400).json({ status: "Usuario no creado correctamente", error });
  }
};

// Actualizar un producto en la base de datos
const updateUsers = async (req, res) => {
  try {
    const id = req.params.userId;
    const updated = await User.findByIdAndUpdate(id, { $set: req.body });
    res.status(201).json(updated);
  } catch (error) {
    res.status(201).json({ msj: "Actualizacion fallida", error });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.userId;
  await User.findByIdAndDelete(id);
  res.status(200).json({ msj: "Usurio eliminado" });
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) throw "Uno o mas campos estan vacios";

    const user = await User.findOne({ email });

    if(user){
      if (password === user.password) {
        // generar token
  
        const token = jwt.sign(
          {
            user_id: user._id,
            email,
            username: user.username,
            phone: user.phone,
            permissions: user.Permissions
          },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "2h" }
        );
        
        return res.status(200).json({ status: "Sesion iniciada", token });
      } 

      throw "Credentials are inavlid";
    }

    throw "Usuario no existe";
  } catch (err) {
    res.status(401).json({ err });
  }
};

module.exports = {
  getUsers,
  getOneUser,
  createUsers,
  updateUsers,
  deleteUser,
  login,
};
