const Publisher = require('../../models/Publisher')
const Address = require('../../models/Address')
const Book = require('../../models/Book')


const publisher = async (obj, { publisherId }) => {
  const p = Publisher.query().findById(publisherId)

  return p
}

const address = async ({ addressId }) => {
  const publisherAddress = Address.query().findOne({ id: addressId })

  return publisherAddress
}

const books = async ({ id }) => {
  const publisherBooks = Book.query().where({ publisherId: id })

  return publisherBooks
}

const resolver = {
  Query: {
    publisher,
  },
  Publisher: {
    address,
    books,
  },
}


module.exports = resolver
