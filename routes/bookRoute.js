const express = require("express");

const bookController = require("./../controllers/bookController");
// const userController = require("./../controllers/userController");
const router = express.Router();
router.post("/", bookController.createBook);
router.get("/", bookController.getBooks);
router.get("/:id", bookController.getBook);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
