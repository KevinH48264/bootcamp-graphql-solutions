const Book = require('../../models/Book')
const Author = require('../../models/Author')

const allBooks = async () => {
  const books = await Book.query()

  return books
}

const book = async (obj, { bookId }) => {
  const b = await Book.query().findById(bookId)

  return b
}

const author = async ({ authorId }) => {
  const bookAuthor = Author.query().findById(authorId)

  return bookAuthor
}

const resolver = {
  Query: {
    allBooks,
    book,
  },
  Book: {
    author,
  },
}

module.exports = resolver
