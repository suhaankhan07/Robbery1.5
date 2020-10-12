class Player {
  constructor() {
    this.name = null;
    this.distance = 0;
    this.index = null;
    this.rank = null;
   }
   
getCount() {
    playerCountRef = database.ref('playerCount');
    playerCountRef.on('value',function(data) {
     playerCountRef = data.val();
    })
}

updateCount(count) {
  database.ref('/').update({
    playerCount:count
  })
}

update() {
  var playerIndex = "players/player" + this.index;
   database.ref(playerIndex).set ({
    name:this.name,
    distance:this.distance
   })
}

static getPlayerInfo() {
  var playerInfoRef = database.ref('players');
   playerInfoRef.on("value",(data)=>{
     allPlayers.val();
   })
} 



}