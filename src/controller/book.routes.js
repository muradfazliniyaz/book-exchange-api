// VIEW
import express from "express";
const router = express.Router();
import {
  getAllBooks,
  getBookById,
  getBookByUserId,
  createBook,
  changeBookInfo,
  deleteBookById,
  setRequestedBy,
  getRequestedBooks,
  getRequestedBooksFromMe,
} from "../data/book.repository.js";


// ReST API Definition - Endpoints
router.get("/books", async (request, response) => {
  const allBooks = await getAllBooks();
  response.json(allBooks);
});

router.get("/requestedBooks/:id", async (request, response) => {
  const userId = request.params.id;
  const allBooks = await getRequestedBooks(userId);
  response.json(allBooks);
});

router.get("/requestedBooksFromMe/:id", async (request, response) => {
  const userId = request.params.id;
  const allBooks = await getRequestedBooksFromMe(userId);
  response.json(allBooks);
});

router.put("/books/:bookId/:userId", async (request, response) => {
  const bookId = request.params.bookId;
  const userId = request.params.userId;
  await setRequestedBy(bookId, userId);
  response.status(200).json();
});

// // ReST API Definition - Endpoints Kullanıcıya göre kitap çekme
// router.get("/books", async (req, res) => {
//   const userId = req.user.sub;
//   const books = db.books.find({user_id:userId})
//   // const allBooks = await getAllBooks();
//   res.json(books);
// });


router.get("/books/:id", async (request, response) => {
  const bookId = request.params.id;
  // find the book by book id in the array
  const searchedBook = await getBookById(bookId);
  response.status(200).json(searchedBook);
});

router.get("/books/user/:userId", async (request, response) => {
  const bookByUserId = request.params.userId;
  // find the book by book id in the array
  const searchedBooks = await getBookByUserId(bookByUserId);
  response.status(200).json(searchedBooks);
});

router.post("/books", async (request, response) => {
  const aBook = request.body;
  await createBook(aBook);
  response.status(201).json();
});

router.put("/books/:id", async (request, response) => {
  const bookId = request.params.id;
  const aBook = request.body;
  await changeBookInfo(bookId, aBook);
  response.status(200).json();
});

router.delete("/books/:id", async (request, response) => {
  const bookId = request.params.id;
  await deleteBookById(bookId);
  response.status(200).json();
});

export { router };
