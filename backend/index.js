const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const clientRoutes = require("./routes/clientRoutes");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = 5000;
const MONGO_URI = process.env.DB_URL;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/clients", clientRoutes);

// MongoDB connection
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
