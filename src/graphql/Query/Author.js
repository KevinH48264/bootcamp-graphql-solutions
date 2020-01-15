const Author = require('../../models/Author')

const searchAuthors = async (obj, { input }) => {
  const authorsByName = await Author.query()
    .where('firstName', 'like', `%${input}%`)
    .orWhere('lastName', 'like', `%${input}%`)

  return authorsByName
}


const resolver = {
  Query: {
    searchAuthors,
  },
}


module.exports = resolver
