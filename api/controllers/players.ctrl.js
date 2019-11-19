const { Players } = require("../associations/associations");

const fetchPlayerByID = (req, res) => {
  try{
    Players.findOne({
      where: { player_id: req.params.playerID }
    }).then(player => {
      player = JSON.parse(JSON.stringify(player));
      res.status(200).json({
        player,
        status: 200
      });
    }).catch(error => {
      res.status(404).json({
        error,
        status: 404
      })
    })
  } catch(error){
    res.status(500).json({
      error,
      status: 500
    })
  }
};

module.exports = { fetchPlayerByID };
