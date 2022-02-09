const { application } = require("express");
const express = require("express");
const router = express.Router();

// -- importemos el controlador que nos trae las funciones
const productsControllers = require("../controllers/ProductsController");

router.get("/get-product", productsControllers.getProducts);
router.post("/create-product", productsControllers.createProducts);

module.exports = router;
