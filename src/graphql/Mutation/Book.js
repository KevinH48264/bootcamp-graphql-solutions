const Book = require('../../models/Book')

const createBook = async (obj, { input }) => {
  const newBook = await Book.query().insert(input).returning('*')

  return newBook
}


const resolver = {
  Mutation: {
    createBook,
  },
}

module.exports = resolver
