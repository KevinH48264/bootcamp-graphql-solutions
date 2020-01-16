const Book = require('../../models/Book')
const Author = require('../../models/Author')
const Publisher = require('../../models/Publisher')

const allBooks = async () => {
  const books = await Book.query()

  return books
}

const book = async (obj, { bookId }) => {
  const b = await Book.query().findById(bookId)

  return b
}

const author = async ({ authorId }) => {
  const bookAuthor = await Author.query().findById(authorId)

  return bookAuthor
}

const publisher = async ({ publisherId }) => {
  const p = await Publisher.query().findById(publisherId)

  return p
}

const resolver = {
  Query: {
    allBooks,
    book,
  },
  Book: {
    author,
    publisher,
  },
}

module.exports = resolver
