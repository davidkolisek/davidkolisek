import gql from 'graphql-tag';

export const FETCH_BANGS_QUERY = gql`
  {
    getBangs {
      id
      body
      createdAt
      username
      messageCount
      messages {
        id
        username
        createdAt
        body
      }
    }
  }
`;