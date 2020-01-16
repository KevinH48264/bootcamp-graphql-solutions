const Author = require('../../models/Author')
const Book = require('../../models/Book')
const Address = require('../../models/Address')

const allAuthors = async () => {
  try {
    const authors = await Author.query()

    return authors
  } catch (err) {
    throw new Error('Failed to get authors')
  }
}

const author = async (obj, { authorId }) => {
  try {
    const a = Author.query().findById(authorId)

    return a
  } catch (err) {
    throw new Error(`Could not fetch author with ID: ${authorId}`)
  }
}

const searchAuthors = async (obj, { input }) => {
  try {
    const authorsByName = await Author.query()
      .where('firstName', 'ilike', `%${input}%`)
      .orWhere('lastName', 'ilike', `%${input}%`)

    return authorsByName
  } catch (err) {
    throw new Error('Failed to fetch data')
  }
}

const books = async ({ id }) => {
  try {
    const authorBooks = Book.query().where({ authorId: id })

    return authorBooks
  } catch (err) {
    throw new Error('Failed to fetch books')
  }
}

const address = async ({ addressId }) => {
  const authorAddress = Address.query().findOne({ id: addressId })

  return authorAddress
}


const resolver = {
  Query: {
    author,
    searchAuthors,
    allAuthors,
  },
  Author: {
    books,
    address,
  },
}


module.exports = resolver
