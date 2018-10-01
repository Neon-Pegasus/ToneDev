import { gql } from 'apollo-server';

export default gql`
query FetchMemCommentsByOrg {
  organization(login: "github") {
    members(first: 100) {
      edges {
        node {
          name
          pullRequests(last: 20) {
            edges {
              node {
                body
              }
            }
          }
        }
      }
    }
  }
}
`;
