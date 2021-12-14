/**
 * Index Router File
 * Lists all the routes of the API
 * Hanldes 404 routes
 */

const express = require("express");
const router = express.Router();

// import all the routes
const infoRouter = require("./infoRouter");
const searchRouter = require("./searchRouter");
const unknownMethod = require("../controllers/unknownMethod");

// Register the routes
router.use("/info", infoRouter);

// Fill in other routes
router.use("/search", searchRouter);

// If nothing processed from above, the 404 response will be generated
router.all("*", unknownMethod.notFound);

module.exports = router;
