const express = require("express");
const env = require('dotenv')

env.config()
const app = express()
const port = process.env.PORT

console.log(port)
