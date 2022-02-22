// traer el modelo de datos
const Product = require("../Models/Product");

// Mostrar los productos creados en la BD
const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

const getOneProduct = async (req, res) => {
  try {
    const id = req.params.productId;
    const product = await Product.findById(id);
    res.status(200).json(product ? product : "El producto no existe");
  } catch (error) {
    res.status(200).json({msj: "Error al consultar el id", error});
  }
};

// Crear un producto en la base de datos
const createProducts = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ status: "Producto creado correctamente" });
    //throw
  } catch (error) {
    console.log(error);
    res.status(203).json({ status: "Producto no creado correctamente", error });
  }
};

// Actualizar un producto en la base de datos
const updateProducts = async (req, res) => {
  try {
    const id = req.params.productId;
    const updated = await Product.findByIdAndUpdate(id, {$set: req.body});
    res.status(201).json(updated);
  } catch (error) {
    res.status(201).json({ msj: "Actualizacion fallida", error });
  }
};

const deleteProduct = async( req, res) => {
  const id = req.params.productId
  await Product.findByIdAndDelete(id)
  res.status(200).json({msj: "Producto eliminado"})
}

const manyProducts = (req, res) => {

  try {
    if (typeof req.body !== Array) throw "Se debe enviar un array"


    console.log(Object.prototype.toString.call(req.body))
  } catch (error) {
    res.status(400).json({error})
  }

}

module.exports = {
  getProducts,
  createProducts,
  updateProducts,
  getOneProduct,
  deleteProduct,
  manyProducts
};
