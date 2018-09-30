import { gql } from 'apollo-server';

export default gql`
query FetchReposByOrg($organization: organization) {
  search(query: $organization, type: REPOSITORY, first: 100) {
    repositoryCount
    edges {
      node {
        ... on Repository {
          name
          descriptionHTML
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
          updatedAt
        }
      }
    }
  }
}
`;
