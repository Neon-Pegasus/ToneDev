
const typeDefs = `
type Query {
  user(id: ID!): User
}
type User {
  id: ID!
  name: String
}`

const resolvers = {
  Query: {
    user: (root, args, context, info) => {
    //   return fetchUserById(args.id)
      return { id: 'ryan' };

    }
  },
};

module.exports.typeDefs = typeDefs;
module.exports.resolvers = resolvers;
