import asyncHandler from "../middleware/asyncHandler.js";
import Vehical from "../models/vehicalModel.js";

const getAllVehicals = asyncHandler(async (req, res) => {
  const car = await Vehical.find();

  if (car) {
    res.status(201).json(car);
  } else {
    res.status(404);
    throw new Error("No Vehical Exists in the our Database ");
  }
});

const addVehical = asyncHandler(async (req, res) => {
  const { make, model, year, price, isSold } = req.body;

  if (!make || !model || !year || !price) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newVehical = new Vehical({ make, model, year, price, isSold });

  if (newVehical) {
    const vehical = await newVehical.save();
    res.status(201).json({
      message: "Vehicle successfully added to the inventory",
      vehical,
    });
  } else {
    res.status(401).json({
      message: "OOps! Something went wrong!",
    });
  }
});

const deleteVehicalByID = asyncHandler(async (req, res) => {
  const vehical = await Vehical.findById(req.params.id);

  if (vehical) {
    await Vehical.deleteOne({ _id: vehical._id });
    res.json({ message: "Vehical removed" });
  } else {
    res.status(404);
    throw new Error("Vehical not found");
  }
});

const getVehicalByID = asyncHandler(async (req, res) => {
  const vehical = await Vehical.findById(req.params.id);

  if (vehical) {
    res.json(vehical);
  } else {
    res.status(404);
    throw new Error("Vehical not found");
  }
});

const updateVehicalByID = asyncHandler(async (req, res) => {
  const vehical = await Vehical.findById(req.params.id);

  if (vehical) {
    vehical.make = req.body.make || vehical.make;
    vehical.model = req.body.model || vehical.model;
    vehical.year = req.body.year || vehical.year;
    vehical.price = req.body.price || vehical.price;
    vehical.isSold = Boolean(req.body.isSold);

    const updatedVehical = await vehical.save();

    res.status(201).json({
      message: "Vehical updated successfully!",
      updatedVehical,
    });
  } else {
    res.status(404);
    throw new Error("Vehical not found");
  }
});

export {
  getAllVehicals,
  addVehical,
  deleteVehicalByID,
  getVehicalByID,
  updateVehicalByID,
};
