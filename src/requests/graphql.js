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
  console.log(response);
  return response.user.pinnedItems.nodes;
}

export async function fetchAllRepos() {
  const client = new GraphQLClient(githubUrl, githubAuth);
  const query = gql`
    query {
      repositoryOwner(login: "keithfrazier98") {
        avatarUrl
        url
        login
        repositories(last: 100, orderBy: { direction: DESC, field: UPDATED_AT }, privacy: PUBLIC) {
          nodes {
            repositoryTopics(first: 4) {
              nodes {
                topic {
                  name
                }
              }
            }
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
  console.log(response);
  return response.repositoryOwner;
}

//TODO: Contribution data
export async function getContributionData() {
  const client = new GraphQLClient(githubUrl, githubAuth);
  const oneYearAgo = new Date(Date.now() - 3.156e10);
  const today = new Date();
  const query = gql`
    query ($ONEYEARAGO: DateTime!, $TODAY: DateTime!) {
      viewer {
        contributionsCollection(from: $ONEYEARAGO, to: $TODAY) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                color
                contributionLevel
                date
                weekday
              }
            }
          }
        }
      }
    }
  `;

  const {
    viewer: {
      contributionsCollection: { contributionCalendar },
    },
  } = await client.request(query, { ONEYEARAGO: oneYearAgo, TODAY: today });

  return contributionCalendar
}
