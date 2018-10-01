const typeDefs = `
  type Query {
    allOrgs: [Org]
}
  type Org {
    id: Int
    orgName: String
  }
`;

module.exports = typeDefs;
