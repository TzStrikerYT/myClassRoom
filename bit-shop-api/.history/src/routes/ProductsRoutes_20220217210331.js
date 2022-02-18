const { application } = require("express");
const express = require("express");
const router = express.Router();

// -- importemos el controlador que nos trae las funciones
const productsControllers = require("../controllers/ProductsController");
const auth = require("../middlewares/auth")

router.get("/get-products", auth, productsControllers.getProducts);
router.post("/create-product", productsControllers.createProducts);
router.post("/create-many-products", productsControllers.manyProducts);
router.put("/update-product/:productId", productsControllers.updateProducts)
router.get("/get-one-product/:productId", productsControllers.getOneProduct)
router.delete("/delete-product/:productId", productsControllers.deleteProduct)

module.exports = router;