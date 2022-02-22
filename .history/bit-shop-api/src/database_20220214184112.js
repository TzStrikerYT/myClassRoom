const mongoose = require('mongoose')

const uri = process.env.MONGO_ATLAS

//, {useNewUrlParser: true, useUnifiedTopology: true}
mongoose.connect(uri)
    .then((db) => console.log(`Conexion a DB exitosa`))
    .catch((err) => console.log(err))

module.exports = mongoose