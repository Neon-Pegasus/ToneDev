import { gql } from 'apollo-server';
// {"queryString": "language:JavaScript stars:>10000"}

export default gql`
query FetchTopRepos($queryString: String!) {
  search(query: $queryString, type: REPOSITORY, first: 10) {
    repositoryCount
    edges {
      node {
        ... on Repository {
          name
          descriptionHTML
          stargazers {
            totalCount
          }
          pullRequests(last: 20) {
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
`;
