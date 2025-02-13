const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv=require("dotenv");
const authRoutes = require("./routes/auth");
const searchRoutes = require("./routes/search");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on("connected", () => console.log("Connected to MongoDB"));
app.use("/auth", authRoutes);
app.use("/search", searchRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
