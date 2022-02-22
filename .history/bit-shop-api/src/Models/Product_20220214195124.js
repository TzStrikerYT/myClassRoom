const mongoose = require("mongoose");
const { Schema } = mongoose

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    availableElemnts: { type: Number, required: true },
    description: {
      type: String,
      required: false,
      default: "El usuario no añadió una descropción",
    },
    image: { type: String, required: false, default: "Sin Imagénes" },
    tags: { type: Array, required: false, default: false }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);