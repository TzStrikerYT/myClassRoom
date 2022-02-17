const express = require("express")
const router = express.Router()

//importar los controladores
const userControllers = require("../Controllers/UserControllers")

router.get("/ruta", userControllers.getUsers)

module.exports = router