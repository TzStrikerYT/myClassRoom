const mongoose = require("mongoose");
const { Schema } = mongoose

const userSchema = new Schema(
  {
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: String, required: true},
    Permissions: {
        admin: {type: Boolean, default: false},
        client: {type: Boolean, default: true},
        verified: {type: Boolean, default: false}
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);