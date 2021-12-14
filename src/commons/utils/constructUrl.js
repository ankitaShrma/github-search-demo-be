/* eslint-disable*/
// For unauthenticated requests, the rate limit allows you to make up to 10 requests per minute.
// used simple flow to construct url rather than other function here
const constructUrl = (
  search,
  { topic, includes, user, org, forks, stars, language },
  sort = "updated",
  order = "asc",
  { page = 1, per_page = 20 }
) => {
  const mainSearchUrl = process.env.GITHUB_REPO_URL; // search url for repositories
  let query =
    "q=" +
    search +
    (topic ? `topic:${topic}` : "") +
    (includes ? `in:${includes}` : "") +
    (user ? `user:${user}` : "") +
    (org ? `org:${org}` : "") +
    (forks ? `forks:${forks}` : "") +
    (stars ? `stars:${stars}` : "") +
    (language ? `language:${language}` : "") +
    `&sort=${sort}` +
    `&order=${order}` +
    `&page=${page}` +
    `&per_page=${per_page}`;
  return mainSearchUrl + encodeURIComponent(query);
};

module.exports = { constructUrl };
