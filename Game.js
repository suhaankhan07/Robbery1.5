class Game {
  constructor() {
      
  }
  
  getState() {
    var gameStateRef = database.ref('gameState');
     gameStateRef.on("value",function(data){
     gameStateRef = data.val();
    })
  }

  update(state) {
   gameState.ref('/').update({
     gameState :state
   }) 
  }

  async start() {
    if(gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      
      if(PlayerCountRef.exists()) {
        playerCountRef = playerCount.val();
        player.getCount();
      } 
     form = new Form();
     form.display();
    }


    Robber1 = createSprite(displayWidth + 10,displayHeight - 10);
    Robber1.addImage(Robber);
    
    Robber2 = createSprite(displayWidth + 15,displayHeight - 15);
    Robber2.addImage("Robber2",xRobber);
    
    Gun1 = createSprite(randomNumber(0,800),randomNumber(0,800));
    Gun2 = createSprite(randomNumber(0,800),randomNumber(0,800));
    Gun3 = createSprite(randomNumber(0,800),randomNumber(0,800));
    Gun4 = createSprite(randomNumber(0,800),randomNumber(0,800));
  
    treasureBox1 = createSprite(randomNumber(0,800),randomNumber(0,800));
    treasureBox2 = createSprite(randomNumber(0,800),randomNumber(0,800));
    treasureBox3 = createSprite(randomNumber(0,800),randomNumber(0,800));
    treasureBox4 = createSprite(randomNumber(0,800),randomNumber(0,800));
    
     
    Robbers = [Robber1,Robber2];
  }
  
  
  play() {
  form.hide();

  Player.getPlayerInfo();


  if(allPlayers !== undefined) {
    image(Board,displayWidth/2,displayHeight/2,displayWidth,displayHeight);

    var x = 10;
    var y = 50;

    for(var plr in allPlayers) {
      
      x = displayWidth - allPlayers[plr].distance;
      y = displayHeight - allPlayers[plr].distance;

      index = 0;
      index = index + 1;

       x = x + 50;

    
      if(index === player.index) {
        stroke(10);
        fill("red");
        ellipse(x,y,40,40)
      }
     }
    }

   if(keyDown(RIGHT_ARROW) && player.index !== null) {
     player.distance += 50;
     player.update();
    }

  if(keyDown(UP_ARROW) && player.index !== null) {
    player.distance += 50;
    player.distance = displayWidth - player.distance;
    player.update();
    }
 
    if(player.distance > displayWidth - 50 && player.distance > diplayHeight - 50) {
      gameState = 2;
      image(Winner,displayWidth/2,displayHeight + 100);
    }
    else {
    image(Loser,displayWidth/2,displayHeight + 100);
    }
    
    if(player.isTouching(treasureBox1) || player.isTouching(treasureBox2) || player.isTouching(treasureBox3) || player.isTouching(treasureBox4)) {
       textSize(25);
       text("IF YOU LANDEED ON THIS THEN ROLL SPECIAL DICE. GO THAT MANY UP",displayWidth/2 + 200,displayHeight + 350);
    }

    if(player.isTouching(gun1) || player.isTouching(gun2) || player.isTouching(gun3) || player.isTouching(gun4)) {
      textSize(25);
      text("UH-OH, ROLL SPECIAL DICE AND GO THAT MANY DOWN",displayWidth/2 + 200,displayHeight + 350);
   }

  }

  

   end() {     
    console.log("GAME ENDED");
     
   }
  }