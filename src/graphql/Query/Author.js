const Author = require('../../models/Author')
const Book = require('../../models/Book')
const Address = require('../../models/Address')

const author = async (obj, { authorId }) => {
  const a = Author.query().findById(authorId)

  return a
}

const searchAuthors = async (obj, { input }) => {
  const authorsByName = await Author.query()
    .where('firstName', 'ilike', `%${input}%`)
    .orWhere('lastName', 'ilike', `%${input}%`)

  return authorsByName
}

const books = async ({ id }) => {
  const authorBooks = Book.query().where({ authorId: id })

  return authorBooks
}

const address = async ({ addressId }) => {
  const authorAddress = Address.query().findOne({ id: addressId })

  return authorAddress
}


const resolver = {
  Query: {
    author,
    searchAuthors,
  },
  Author: {
    books,
    address,
  },
}


module.exports = resolver
