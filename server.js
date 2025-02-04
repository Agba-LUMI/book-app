const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/bookRoute");
const userRoutes = require("./routes/userRoute");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = express();
app.use(express.json());
app.use("/books", bookRoutes);
app.use("/users", userRoutes);

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.7"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.listen(8000, "127.0.0.1", () => console.log(`Server running on port 8000`));
