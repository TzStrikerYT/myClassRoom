const express = require("express");
const env = require("dotenv");
const morgan = require("morgan");
const cors = require('cors')

env.config();
require('./database')
const app = express();
const port = process.env.PORT;

app.use(morgan("dev"));
app.use(express.json())
app.use(cors({ origin: ['http://localhost:4200'] }))

// Rutas
app.use('/api/products', require('./routes/ProductsRoutes'))
app.use('/api/user', require('./routes/UserRoutes'))

app.listen(port, () => console.log(`Ejecutando api en el puerto ${port}`));