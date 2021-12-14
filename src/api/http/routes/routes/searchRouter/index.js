const searchController = require("../../../controllers/githubSearch");

const express = require("express");
const searchRouter = express.Router();

// Register handlers here
searchRouter.route("/").get(searchController.searchRepo);

module.exports = searchRouter;
