const express = require("express");
const env = require("dotenv");
const morgan = require("morgan");

env.config();
require('./database')
const app = express();
const port = process.env.PORT;

app.use(morgan("dev"));
app.use(express.json())

// Rutas
app.use('/api/products', requre('./routes/ProductsRoutes'))
app.use('/api/user', require('./.git'))

app.listen(port, () => console.log(`Ejecutando api en el puerto ${port}`));