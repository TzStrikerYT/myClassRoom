const mongoose = require("mongoose");
const env = require("dotenv");
env.config()

const uri = process.env.MONGO_DB_ATLAS;
console.log(uri);

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("Conexion exitosa en base de datos"))
  .catch((err) => console.log(err));

  module.exports = mongoose