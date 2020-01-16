const merge = require('lodash.merge')
const Author = require('./Author')
const Book = require('./Book')
const Publisher = require('./Publisher')

const resolvers = [Author, Book, Publisher]

module.exports = merge(...resolvers)
