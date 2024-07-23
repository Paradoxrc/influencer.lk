import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { PORT } from "./config.js";
import authRouter from "./routes/auth.js";
import InfluencerRouter from "./routes/influencers.js";  // Import the auth router

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Use the auth router for requests to /api/auth
app.use("/api/auth", authRouter);
app.use("/api/influencers", InfluencerRouter);

app.get("/", (request, response) => {
  console.log("Request received");
  return response.status(234).send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
