import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongoDB/connect.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E!");
});

const startServer = async () => {
  try {
    connectDB(MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server listening on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
