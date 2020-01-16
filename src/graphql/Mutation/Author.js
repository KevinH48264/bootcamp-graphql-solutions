const Author = require('../../models/Author')

const createAuthor = async (obj, { input }) => {
  try {
    const newAuthor = await Author.query().insertGraph(input).returning('*')

    return newAuthor
  } catch (err) {
    throw new Error(`Could not create new author with input: ${JSON.stringify(input)}`)
  }
}


const resolver = {
  Mutation: {
    createAuthor,
  },
}


module.exports = resolver
