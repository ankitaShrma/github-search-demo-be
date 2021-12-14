/* eslint-disable*/
// For unauthenticated requests, the rate limit allows you to make up to 10 requests per minute.
// used simple flow to construct url rather than other function here
const constructUrl = ({
  search,
  includes,
  user,
  org,
  forks,
  stars,
  language,
  sort = "updated",
  order = "asc",
  page = 0,
  per_page = 2,
}) => {
  const mainSearchUrl = process.env.GITHUB_REPO_URL; // search url for repositories
  //When your search query requests multiple resources, the response will only contain the resources that you have access to and will not provide an error message listing the resources that were not returned.
  const query =
    `?q=page=${parseInt(page) + 1}` +
    (search ? `search:${search}` : "") +
    (includes ? `&in:${includes}` : "") +
    (user ? `&user:${user}` : "") +
    (org ? `&org:${org}` : "") +
    (forks ? `&forks:>=${forks}` : "") +
    (stars ? `&stars:>=${stars}` : "") +
    (language ? `&language:${language}` : "") +
    `&sort=${sort}` +
    `&order=${order}` +
    `&per_page=${per_page}`;
  return mainSearchUrl + query;
};

module.exports = { constructUrl };
