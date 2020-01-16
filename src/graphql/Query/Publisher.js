const Publisher = require('../../models/Publisher')
const Address = require('../../models/Address')
const Book = require('../../models/Book')

const allPublishers = async () => {
  try {
    const publishers = await Publisher.query()

    return publishers
  } catch (error) {
    throw new Error('Failed to fetch publishers')
  }
}

const publisher = async (obj, { publisherId }) => {
  try {
    const p = Publisher.query().findById(publisherId)

    return p
  } catch (err) {
    throw new Error(`Failed to fetch publisher with ID: ${publisherId}`)
  }
}

const address = async ({ addressId }) => {
  try {
    const publisherAddress = Address.query().findOne({ id: addressId })

    return publisherAddress
  } catch (err) {
    throw new Error('Failed to fetch address')
  }
}

const books = async ({ id }) => {
  try {
    const publisherBooks = Book.query().where({ publisherId: id })

    return publisherBooks
  } catch (err) {
    throw new Error('Failed to fetch books')
  }
}

const resolver = {
  Query: {
    publisher,
    allPublishers,
  },
  Publisher: {
    address,
    books,
  },
}


module.exports = resolver
