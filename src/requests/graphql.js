import { gql, GraphQLClient } from "graphql-request";

const githubUrl = "https://api.github.com/graphql";
const githubAuth = {
  headers: { Authorization: `Bearer ${process.env.REACT_APP_GITHUB_BEARER}` },
};

export async function fetchPinnedRepos() {
  const client = new GraphQLClient(githubUrl, githubAuth);
  const query = gql`
    query {
      user(login: "keithfrazier98") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              createdAt
              description
              homepageUrl
              owner {
                avatarUrl
                url
                login
              }
              isPrivate
              url
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
  `;

  const response = await client.request(query);
  console.log(response)
  return response.user.pinnedItems.nodes;
}

export async function fetchAllRepos() {
  const client = new GraphQLClient(githubUrl, githubAuth);
  const query = gql`
    query {
      repositoryOwner(login: "keithfrazier98") {
        login
        id
        repositories(last: 100, orderBy: { direction: DESC, field: UPDATED_AT }, privacy: PUBLIC) {
          nodes {
            name
            createdAt
            description
            homepageUrl
            owner {
              avatarUrl
              url
              login
            }
            isPrivate
            url
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  `;
  // (githubUrl, body, config)
  const response = await client.request(query);
  console.log(response)
  return response.repositoryOwner.repositories.nodes;
}



//TODO: Contribution data