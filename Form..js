class Form {
    constructor() {
     this.input = createInput("Name");
     this.button = createButton('Play');
     this.greeting = createElement('h3');
     this.title = createElement('h2');
     this.reset = createButton("RESET");
     this.dice = createButton("CLICK ME ROLL DICE")
     this.specialDice = createButoon("CLICK ME ONLY IF YOU LAND ON SPECIAL SPOT")
    }
    hide() {
      this.greeting.hide();
      this.input.hide();
      this.button.hide();  
      this.title.hide();
    }

    display() {
      this.title.html("Robbery");
      //image(RobberyImg, 200,100);  
      this.title.position(displayWidth/2-50,0);

      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      //this.button.addImage("playButton",PlayImg);

      this.dice.position(200,100);

      this.specialDice.position(400,100);

      this.reset.position(displayWidth-100,20);
      //this.reset.addImage(RestartImg);

      this.button.mousePressed(()=> {
       this.input.hide();
       this.button.hide();
       player.name = this.input.value();
       playerCount+=1;
       playerCount = player.index;
       player.update();
       player.updateCount();
       this.greeting.html("Hello " + player.name)
       this.greeting.position(displayWidth/2 - 70, displayHeight/5);
      })

      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      })

      this.dice.mousePressed(()=>{
       dice = randomNumber(1,4);
       textSize(20);
       fill("black");
       text("Dice :" + dice,200,180);
      })
 
      this.specialDice.mousePressed(()=>{
        specialDice = random(4,10);
        textSize(20);
        fill("black");
        text("Dice :" + specialDice,400,180);      
      })

    }
}