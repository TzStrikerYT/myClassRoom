const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema(
    {
        email: {type: String, required: true},
        passwd: {type: String, required: true}
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema)