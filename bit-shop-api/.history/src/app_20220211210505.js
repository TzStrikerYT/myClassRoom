const express = require("express");
const env = require("dotenv");
const morgan = require("morgan");
require("./database")

env.config();
const app = express();
const port = process.env.PORT;

app.use(morgan("dev"));

// Rutas
app.use('/api/products', require('./routes/ProductsRoutes'))

app.listen(port, () => console.log(`Ejecutando api en el puerto ${port}`));