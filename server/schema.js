const typeDefs = `
  type Query {
    allUsers: [User]
  }
  type User {
    id: Int
    firstName: String
  }
`;

module.exports = typeDefs;
