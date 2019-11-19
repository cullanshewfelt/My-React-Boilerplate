const Sequelize = require("sequelize");
const env = require("dotenv").config();

const mlbApp = new Sequelize("mlb_app", env.parsed.DB_USER, env.parsed.DB_PASS, {
  host: env.parsed.DB_HOST,
  port: env.parsed.DB_PORT,
  dialect: "mysql",
  freezeTableName: true,
  logging: false
});


module.exports = { mlbApp };
