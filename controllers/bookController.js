const Book = require("../models/bookModel");
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(201).json({
      status: "success",
      data: {
        books,
      },
    });
  } catch (err) {
    res.send(err.message);
  }
};

exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.status(201).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (err) {
    res.send(err.message);
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (err) {
    res.send(err.message);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.send(err.message);
  }
};
