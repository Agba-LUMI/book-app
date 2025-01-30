const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./book-app/routes/bookRoutes");

const app = express();

app.use(express.json());
app.use("/api/books", bookRoutes);

mongoose
  .connect("mongodb://localhost:27017/bookdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
