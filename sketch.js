
const Engine = Matter.Engine;
const World= Matter.World;  
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = 0;
 var Robber1,Robber2,Robbers;
 var treasureBox, gun; 
 var dice1,dice2;
 var backgroundImage;
 var form, player, game, rank;
 var playerCount;
 var RobberyImg, PlayImg, RestartImg;
 var dice,specialDice;
 var gun1,gun2,gun3,gun4
 var treasureBox1,treasureBox2,treasureBox3,treasureBox4;
 var RobberyImg,PlayImg,RestartImg,Board, Robber, Winner, Loser, Pistol, treasureBox;


function preload() {
  RobberyImg = loadImage("images/Robbery.png");
  PlayImg = loadImage("images/play.png");
  RestartImg = loadImage("images/Restart.png");
  Board = loadImage("images/Board.jpg")
  Robber = loadImage("images/Robber.webp");
  Winner = loadImage("images/Winner.jpg")
  Loser = loadImage("images/Loser.jpg");
  Pistol = loadImage("images/pistol.png");
  treasureBox = loadImage("images/treasureBox.jpg");
 }

function setup() {
  createCanvas(displayWidth-500,displayHeight-200);
  engine = Engine.create();
  world = engine.world;  
  game.getState();
  game.start();
  game = new Game();
}

function draw() {
  background("white");  
  Engine.update(engine);

  if(playerCount === 2) {
    game.update(1);
  }

  if(gameState === 1) {
    clear();
    game.play();
  }

  if(gameState === 2) {
    game.end();
  }
 



  drawSprites();
}

//function keyPressed