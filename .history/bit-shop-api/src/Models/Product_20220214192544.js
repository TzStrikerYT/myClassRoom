const mongoose = require("mongoose")
const { Schema } = mongoose

const productSchema = new Schema(
    {
        name: {},
        price: {},
        description: {},
        image: {},
        tags: {}
    },
    {
        versionKey: false,
        timestamps: true
    }
)

