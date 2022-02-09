const express = require("express");
const env = require('dotenv')
const morgan = require('morgan')

env.config()
const app = express()
const port = process.env.PORT

app.listen(port, () => console.log("Ejecutando api"))