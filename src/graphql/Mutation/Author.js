const Author = require('../../models/Author')

const createAuthor = async (obj, { input }) => {
  const newAuthor = Author.query().insertGraph(input).returning('*')

  return newAuthor
}


const resolver = {
  Mutation: {
    createAuthor,
  },
}


module.exports = resolver
