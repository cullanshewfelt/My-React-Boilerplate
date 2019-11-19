const express = require("express");
let router = express.Router();

const { findAllTeams, findTeamByID } = require("../controllers/teams.ctrl");

// grabs all teams
router.get("/", findAllTeams);
// grabs a team by ID
router.get("/:teamID", findTeamByID);

module.exports = router;
