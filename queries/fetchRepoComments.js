import { gql } from 'apollo-server';

export default gql`
query FetchReposByComments($login: organization) {
  search(query: $organization) {
  organization(login: $login) {
    name
    repositories (last: 50, orderBy:{field: STARGAZERS, direction:DESC}) {
      edges {
        node {
          ... on Repository {
            name
            description
            stargazers {
              totalCount
            }
            pullRequests(last:20, states: OPEN) {
              edges {
                node {
                  title
                  bodyText
                   reviews(last:20) {
                     nodes {
                      state 
                      bodyText
                      comments(last:20) {
                        edges {
                          node {
                            id
                            bodyText
                            updatedAt 
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
    }
  }
}
`;
