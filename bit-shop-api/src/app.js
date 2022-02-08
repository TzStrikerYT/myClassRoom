const express = require("express");
const env = require("dotenv");
const morgan = require("morgan");

env.config();
const app = express();
const port = process.env.PORT;

app.use(morgan("dev"));

app.get('/saludo', (req,  res) => {
    res.json({saludo: "Hola"})
})

app.listen(port, () => console.log(`Ejecutando api en el puerto ${port}`));
