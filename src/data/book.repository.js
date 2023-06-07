import Book from "../models/book.model.js";

async function getAllBooks() {
  try {
    return await Book.findAll();
  } catch (error) {
    console.log(error);
  }
}

async function getBookById(pBookId) {
  try {
    return await Book.findOne({ where: { id:pBookId } });
  } catch (error) {
    console.log(error);
  }
}

async function getBookByUserId(pBookByUserId) {
  try {
    return await Book.findAll({ where: { userId:pBookByUserId } });
  } catch (error) {
    console.log(error);
  }
}

async function createBook(pBook) {
  try {
    return await Book.create(pBook);
  } catch (error) {
    console.log(error);
  }
}

async function changeBookInfo(pBookId, pBook) {
  try {
    return await Book.update(pBook, { where: { id:pBookId } });
  } catch (error) {
    console.log(error);
  }
}

async function deleteBookById(pBookId) {
  try {
    return await Book.destroy({ where: { id:pBookId } });
  } catch (error) {
    console.log(error);
  }
}

export { getAllBooks, getBookById, getBookByUserId, createBook, changeBookInfo, deleteBookById };
