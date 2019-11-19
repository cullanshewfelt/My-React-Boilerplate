module.exports = function(sequelize, DataTypes) {
  return sequelize.define("teams", {
    team_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    team_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    team_code: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    league_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    league: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    mlb_org_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    mlb_org: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mlb_org_abbrev: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    mlb_org_brief: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    division_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    division: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    division_abbrev: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    division_full: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    venue_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    venue_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    time_zone_num: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    time_zone_alt: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    base_url: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    logo_alt: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
  }, {
    tableName: "teams",
    underscored: true,
    timestamps: false
  });
};
