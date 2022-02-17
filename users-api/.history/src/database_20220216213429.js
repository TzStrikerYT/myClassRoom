const env = require("dotenv")
const mongoose= require("mongoose")
env.config()

const uri = process.env.MONGO_ATLAS