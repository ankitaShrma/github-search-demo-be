const SearchService = require("../../../../services/githubSearch");

const searchRepo = async (req, res, next) => {
  try {
    const data = await SearchService.searchRepo({ ...req.body, ...req.query });
    res.send(data);
  } catch (err) {
    next(err);
  }
};

module.exports = { searchRepo };
