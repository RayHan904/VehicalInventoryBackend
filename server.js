import path from "path";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import vehicalRoutes from "./routes/vehicalRoutes.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5001;

connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/vehical", vehicalRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`),
);
