const express = require("express");
let router = express.Router();

const { findRosterByTeamID } = require("../controllers/roster.ctrl");

// grabs a team by ID
router.get("/:teamID", findRosterByTeamID);

module.exports = router;
