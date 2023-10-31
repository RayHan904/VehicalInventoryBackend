import mongoose from "mongoose";

const vehicalSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isSold: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Vehical = mongoose.model("Vehical", vehicalSchema);

export default Vehical;
