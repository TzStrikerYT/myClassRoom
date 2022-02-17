const express = require("express")
const morgan = require("morgan")
const env = require("dotenv")

const app = express()
env.config()

const port = process.env.PORT

//midleware
app.use(morgan("dev"));
app.use(express.json())

//rutas

app.listen(port, () => console.log(`Api corriendo en el puerto ${port}`))