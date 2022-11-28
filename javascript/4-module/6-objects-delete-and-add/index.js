let games = {
    gameName: 'Valorant',
    agents: true,
    numberAgents: 18
}

console.log(games.gameName);
console.log(games.agents);
console.log(games.numberAgents);

delete games.agents;

console.log(games.agents);
console.log(games);

games.skins = true;
console.log(games.skins);