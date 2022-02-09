const express = require("express");
const env = require('dotenv')

env.config()
const app = express()
const port = process.env.PORT

app.listen(port, () => console.log("Ejecutando api"))