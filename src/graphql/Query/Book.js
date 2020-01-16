const Book = require('../../models/Book')
const Author = require('../../models/Author')
const Publisher = require('../../models/Publisher')

const allBooks = async () => {
  try {
    const books = await Book.query()

    return books
  } catch (err) {
    throw new Error('Failed to fetch books')
  }
}

const book = async (obj, { bookId }) => {
  try {
    const b = await Book.query().findById(bookId)

    return b
  } catch (err) {
    throw new Error(`Failed to fetch book with ID: ${bookId}`)
  }
}

const author = async ({ authorId }) => {
  try {
    const bookAuthor = await Author.query().findById(authorId)

    return bookAuthor
  } catch (err) {
    throw new Error('Failed to fetch author')
  }
}

const publisher = async ({ publisherId }) => {
  try {
    const p = await Publisher.query().findById(publisherId)

    return p
  } catch (err) {
    throw new Error('Failed to fetch publisher')
  }
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
