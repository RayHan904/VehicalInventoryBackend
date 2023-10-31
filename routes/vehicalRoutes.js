import express from "express";
import {
  getAllVehicals,
  addVehical,
  deleteVehicalByID,
  getVehicalByID,
  updateVehicalByID,
} from "../controllers/vehicalController.js";

const router = express.Router();

router.route("/").get(getAllVehicals).post(addVehical);

router
  .route("/:id")
  .delete(deleteVehicalByID)
  .get(getVehicalByID)
  .put(updateVehicalByID);

export default router;
