const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/bookRoute");
const userRoutes = require("./routes/userRoute");

const app = express();

app.use(express.json());
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);

mongoose
  .connect("mongodb://localhost:27017/bookdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
