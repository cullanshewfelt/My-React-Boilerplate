const express = require("express");
let router = express.Router();

const { fetchPlayerByID } = require("../controllers/players.ctrl");

// grabs a player by ID
router.get("/:playerID", fetchPlayerByID);

module.exports = router;
