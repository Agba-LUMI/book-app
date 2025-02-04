const bookController = require("./../controllers/bookController");
const userController = require("./../controllers/userController");
const express = require("express");
const router = express.Router();
router.post("/", userController.protect, bookController.createBook);
router.get("/", userController.protect, bookController.getBooks);
router.get("/:id", userController.protect, bookController.getBook);
router.post("/:id", userController.protect, bookController.updateBook);
router.delete("/:id", userController.protect, bookController.deleteBook);

module.exports = router;
