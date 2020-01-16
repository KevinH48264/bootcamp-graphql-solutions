const Book = require('../../models/Book')

const createBook = async (obj, { input }) => {
  try {
    const newBook = await Book.query().insert(input).returning('*')

    return newBook
  } catch (err) {
    throw new Error(`Could not create new book with input: ${JSON.stringify(input)}`)
  }
}


const resolver = {
  Mutation: {
    createBook,
  },
}

module.exports = resolver
