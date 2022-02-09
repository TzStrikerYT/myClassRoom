// traer el modelo de datos

// Mostrar los productos creados en la BD
const getProducts = (req, res) => {
    res.json({name: "chocorramo"})
}

// Crear un producto en la base de datos
const createProducts = (req, res) => {

}

const updateProducts = (req, res) => {
    res.json({status: "Producto Actualizado exitosamente"})
}

module.exports = {
    getProducts,
    createProducts,
    updateProducts
}