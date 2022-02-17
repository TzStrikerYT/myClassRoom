const express = require("express")
const router = express.Router()

router.get("/ruta", (req, res) => {res.json({holi: "hi"})})

module.exports = router