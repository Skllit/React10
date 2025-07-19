

const allPlayers = [...playersData];

export const getPlayers = () => {
return allPlayers;
};

export const generateId = () => {
const maxId = Math.max(...allPlayers.map(p => p.id), 0);
return maxId + 1;
};

export const generateId = () => {
  let id = 1;
  for (const player of allPlayers) {
    if (player.id >= id) {
      id = player.id + 1;
    }
  }
  return id;
};

export const getPlayer = (id) => {
return allPlayers.find(p => p.id === id);
};

export const addPlayer = (player) => {
allPlayers.push(player);
};

export const updatePlayer = (index, newPlayer) => {
allPlayers[index] = newPlayer;
};


export const deletePlayer = (index) => {
allPlayers.splice(index, 1);
};

export const getIndexOfPlayer = (id) => {
return allPlayers.findIndex(p => p.id === id);
};
-------------------------------------------------------------

const alert = (msg) => {
toast.error(msg, {position: 'top-right'});

}

let team = {
title: "Rcb",
players: [],
};

export const getTeam = () => {
return team;

};

export const setTeam = (tm) => {
team = tm;

};


export const editTeamPlayer = (id, nwPlayer) => {

 const index = team.players.findIndex(p => p.id === id);
  if(index !== -1){
   team.players[index] = nwPlayer;
 }
};


export const addTeamPlayer = (player) => {
const exists = team.players.find(p => p.id === player.id);
 if(exists){
alert("This Player already exist in your team !!");
return;
}
team.players.push(player);
};



export const deleteTeamPlayer = (id) => {
team.players = team.players.filter(p => p.id !== id);
};



export const getStatus = () => {
const batsmen = team.players.filter(p => p.role === 'Batsman').length;
const bowlers = team.players.filter(p => p.role === 'Bowler').length;
const keepers = team.players.filter(p => p.role === 'Wicket Keeper').length;

 const errors = [];
 if(batsmen !== 2){
   errors.push('You do not have required number of batsmen in your team');
   }

   if(bowlers < 2){
   errors.push('You do not have required number of bowler in your team');
   }

   if(keepers < 1){
   errors.push('You do not have the required number of wicketkeepers in your team');
    }

 return errors;

};














  
