const mongoose = require("mongoose");
const { Schema } = mongoose

const userSchema = new Schema(
  {
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);