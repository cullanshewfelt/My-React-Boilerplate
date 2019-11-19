const Sequelize = require("sequelize");
const PlayersModel = require("../models/players");
const TeamsModel = require("../models/teams");
const env = require("dotenv").config();

const mlbApp = new Sequelize("mlb_app", env.parsed.DB_USER, env.parsed.DB_PASS, {
  host: env.parsed.DB_HOST,
  port: env.parsed.DB_PORT,
  dialect: "mysql",
  freezeTableName: true,
  logging: false
});

const Players = PlayersModel(mlbApp, Sequelize);
const Teams = TeamsModel(mlbApp, Sequelize);

// mlbApp.sync();

module.exports = { Players, Teams };
