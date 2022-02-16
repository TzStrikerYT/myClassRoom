const { application } = require("express");
const express = require("express");
const router = express.Router();

// -- importemos el controlador que nos trae las funciones
const productsControllers = require("../controllers/ProductsController");

router.get("/get-products", productsControllers.getProducts);
router.post("/create-product", productsControllers.createProducts);
router.put("/update-product/:productId", productsControllers.updateProducts)
router.get("/get-one-product/:productId", productsControllers.getOneProduct)
router.delete("/delete-product/:productId", productsControllers.deleteProduct)

module.exports = router;