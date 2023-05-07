import { getAllBooks } from "../data/book.repository.js";


export async function sendDailyStatistics() {
    // get all the books
    const books = await getAllBooks();
    // get all books read by users
    const usersBooks = await getBooksReadByUsers();
    // create an html template for the email
    const emailTemplate = await createEmailTemplate(books, usersBooks);
    // send the email to managers nodemailer
    await sendEmail(emailTemplate);
}