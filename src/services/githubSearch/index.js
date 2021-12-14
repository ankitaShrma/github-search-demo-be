const axios = require("axios");
const log = require("../../commons/logger");
const { constructUrl } = require("../../commons/utils/constructUrl");

const searchRepo = async query => {
  try {
    const url = constructUrl(query);
    log.info(`Calling github url ${url}`);
    const response = await axios.get(url);

    if (response.data) return response.data;
    throw new Error(`Error getting response from github ${url}`);
  } catch (err) {
    throw new Error(
      `Error from github with query ${JSON.stringify(query)} and err ${
        err.message
      }`
    );
  }
};

module.exports = { searchRepo };
