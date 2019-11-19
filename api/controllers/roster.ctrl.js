const axios = require("axios");
const { Players, Teams } = require("../associations/associations");
const { asyncHelper } = require("./api.utils");
let teams;

const findRosterByTeamID = (req, res) => {
  try{
    Players.findAll({
      where: { team_id: req.params.teamID }
    }).then(roster => {
      roster = JSON.parse(JSON.stringify(roster));
      res.status(200).json({
        roster,
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


const getTeams = () => {
  return Teams.findAll()
  .then(res => {
    return JSON.parse(JSON.stringify(res));
  });
};

getTeams().then(res => {
  teams = res;
});







const getRosters = (teamId) => {
  let link = `http://statsapi.mlb.com:80/api/v1/teams/${teamId}/roster/depthChart`;
  console.log(20, link);
  axios.get(link).then(res => {
    let roster = res.data.roster;
    // console.log(22, roster);
    roster = roster.reduce((acc, curr) => { // this reducer function grabs unique entries
      return acc.some(player => player.person.id === curr.person.id) ?
        acc :
        [...acc, curr]
    }, []);
    // console.log(roster);
    if(roster){
      let temp = [];
      asyncHelper(roster, 0, temp, (player) => { // task()

        let newPlayer = new Promise((resolve, reject) => {
          axios.get(`http://statsapi.mlb.com:80/api/v1/people/${player.person.id}`)
          .then(res => {
            resolve(parsePlayer(teamId, res.data.people[0]));
            // resolve(res.data.people[0]);
          }).catch(error => {
            reject(false)
          });
        });
        return newPlayer;
      }, (successCount, sqlQueryData) => { // done()
        console.log(36, successCount);
        // console.log(37, sqlQueryData);
        Players.bulkCreate(sqlQueryData).then(() => {
          return Players.findAll();
        }).then(players => {
          console.log(42, players);
        }).catch((error) => {
          console.log(44, error);
        })
      });
    }
  }).then(players => {
    resolve(players);
  }).catch(error => {
    console.log(43, error);
  });
}

const parsePlayer = (teamId, response) => {
    let data = {
      player_id: response.id,
      name_full: response.fullName,
      nickname: response.nickName,
      last_init_name: response.lastInitName,
      birth_city: response.birthCity,
      birth_state: response.birthStateProvince, // allow NULL
      birth_country: response.birthCountry,
      active: response.active,
      height: response.height,
      weight: response.weight,
      jersey: response.primaryNumber,
      position: response.primaryPosition.name,
      position_code: response.primaryPosition.code,
      position_abbrev: response.primaryPosition.abbreviation,
      throws: response.pitchHand.code,
      bats: response.batSide.code,
      team_id: teamId,
      team_name: teams.find(team => team.team_id === teamId).team_name,
      mlb_debut: response.mlbDebutDate,
      birth_date: response.birthDate,
      name_slug: response.nameSlug
    }
  return data;
};

module.exports = { findRosterByTeamID };
