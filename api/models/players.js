module.exports = function(sequelize, DataTypes) {
  return sequelize.define("players", {
    player_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name_full: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nickname: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    last_init_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    birth_city: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    birth_state: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    birth_country: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    active: {
      type: DataTypes.TINYINT(4),
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    height: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    jersey: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    position: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    position_code: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    position_abbrev: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    throws: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    bats: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    team_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    team_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mlb_debut: {
      type: DataTypes.DATE(),
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATE(),
      allowNull: false
    },
    name_slug: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    headshot: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: "players",
    underscored: true,
    timestamps: false
  });
};
