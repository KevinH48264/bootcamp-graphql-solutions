const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    allBooks: [Book!]!
    allPublishers: [Publisher!]!
    allAuthors: [Author!]!
    book(bookId: ID!): Book!
    author(authorId: ID!): Author!
    publisher(publisherId: ID!): Publisher!
    searchAuthors(input: String!): [Author!]!
  }

  type Mutation {
    createBook(input: CreateBookInput!): Book!
    createAuthor(input: CreateAuthorInput!): Author!
  }

  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
    address: Address
    books: [Book!]!
    createdAt: String!
  }

  type Book {
    id: ID!
    title: String!
    language: String!
    numPages: Int
    datePublished: String
    bestseller: Boolean
    author: Author!
    publisher: Publisher!
    createdAt: String!
  }

  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int
    address: Address
    books: [Book!]!
    createdAt: String!
  }

  type Address {
    id: ID!
    street: String!
    city: String!
    zip: String!
    createdAt: String!
  }

  input CreateBookInput {
    title: String!
    language: String!
    numPages: Int
    datePublished: String
    bestseller: Boolean
    authorId: String!
    publisherId: String!
  }

  input CreateAuthorInput {
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
    address: AddressInput
  }
  
  input AddressInput {
    street: String!
    city: String!
    state: String!
    zip: String!
  }
`
