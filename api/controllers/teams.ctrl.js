const { Teams } = require("../associations/associations");

const findAllTeams = (req, res) => {
  try{
    Teams.findAll({

    }).then(teams => {
      teams = JSON.parse(JSON.stringify(teams));
      res.status(200).json({
        teams,
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

const findTeamByID = (req, res) => {
  try{
    Teams.findOne({
      where: {
        team_id: req.params.teamID
      }
    }).then(team => {
      team = JSON.parse(JSON.stringify(team));
      res.status(200).json({
        team,
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



// this logic was used to create teams table in SQL but is no longer needed:

// const createTeams = (season) => {
//   let link = `http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='${season}'`
//   axios.get(link).then(res => {
//     teams = res.data.team_all_season.queryResults.row;
//     const teamsArray = parseTeams(teams);
//     console.log(8, teams)
//     Teams.bulkCreate(teamsArray).then(() => {
//       return Teams.findAll();
//     }).then(teams => {
//       console.log(15, teams);
//     })
//   })
// };

const parseTeams = (teams) => {
  let teamsArray = [];
  for (let team in teams) {
    // console.log(teams[team]);
    let data = {
      team_id: teams[team].team_id,
      team_code: teams[team].team_code,
      team_name: teams[team].name_display_full,
      league_id: teams[team].league_id,
      league: teams[team].league,
      mlb_org_id: teams[team].mlb_org_id,
      mlb_org: teams[team].mlb_org,
      mlb_org_abbrev: teams[team].mlb_org_abbrev,
      mlb_org_brief: teams[team].mlb_org_brief,
      division: teams[team].division,
      division_id: teams[team].division_id,
      division_abbrev: teams[team].division_abbrev,
      division_full: teams[team].division_full,
      state: teams[team].state,
      city: teams[team].city,
      venue_name: teams[team].venue_name,
      venue_id: teams[team].venue_id,
      time_zone_num: teams[team].time_zone_num,
      time_zone_alt: teams[team].time_zone_alt,
      base_url: teams[team].base_url
    };
    teamsArray.push(data);
  };
  return teamsArray;
}

module.exports = { findAllTeams, findTeamByID };
