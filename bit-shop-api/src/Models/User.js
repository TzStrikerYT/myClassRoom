const mongoose = require("mongoose");
const { Schema } = mongoose

const productSchema = new Schema(
  {
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("User", productSchema);