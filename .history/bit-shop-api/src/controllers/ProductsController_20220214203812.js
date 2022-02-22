// traer el modelo de datos
const Product = require("../Models/Product");

// Mostrar los productos creados en la BD
const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

// Crear un producto en la base de datos
const createProducts = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json({ status: "Producto creado correctamente" });
};

const updateProducts = async (req, res) => {
  res.json({ status: "Producto Actualizado exitosamente" });
};

module.exports = {
  getProducts,
  createProducts,
  updateProducts,
};