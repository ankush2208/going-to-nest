var bird , parrot ,parrot2 , sky , skyi,bird2,bird3,bird4,birda;
var PLAY=1,END =0;
var gameState=PLAY,distance; 

function preload(){
parrot = loadAnimation("pic1.png","pic2.png","pic3.png");
parrot2=loadAnimation("pic11.png");
skyi = loadImage("pic4.png");
bird2 = loadAnimation("pic6.png","pic6..png");
bird3 = loadAnimation("pic7.png","pic7..png");
bird4 = loadAnimation("pic8.png","pic8..png");

}

function setup() {
    createCanvas(windowWidth,windowHeight);

 sky = createSprite(600,300);
 sky.addImage(skyi);
 sky.scale = 2.3
 


bird=createSprite(120,200);
bird.addAnimation("flying",parrot);
bird.scale = 0.4;

birdaG = createGroup();
birdbG = createGroup();
birdcG = createGroup();
distance=0



}

function draw() {
    background("skyblue");

       drawSprites();
       textSize(25);
       text("distance ="+distance,100,100);   
 if(gameState===PLAY){
       obstacle(); 
        sky.velocityX = -(3+3*distance/100);
        bird.y=World.mouseY
        if(sky.x<350){
            sky.x = width/2
        }   
           distance = distance + Math.round(getFrameRate() / 60);
        if(bird.isTouching(birdaG)){
            gameState=END
                   
        }
        if(bird.isTouching(birdbG)){
            gameState=END 
                   
            
        }
        if(bird.isTouching(birdcG)){
            gameState=END
                      
           
        }
       }else if(gameState===END){
         sky.velocityX=0 
         bird.x=windowWidth/2;
         bird.y=windowHeight/2;
         bird.scale=1.5
         bird.addAnimation("flying",parrot2);
         birdbG.setVelocityXEach(0);
         birdbG.destroyEach(); 
         birdcG.setVelocityXEach(0);
         birdcG.destroyEach();
         birdaG.setVelocityXEach(0);
         birdaG.destroyEach();
         fill("red");
         textSize(40);
         text("press R to restart",500,150); 
       }
       if(keyDown("r")  && gameState===END ){
         reset();
       }
    }


    function obstacle(){
        
      if(frameCount % 100 === 0){
    birda=createSprite(windowWidth,Math.round(random(100,windowHeight-100)));
    birda.addAnimation("flying",bird2);
    birda.velocityX=-(3+3*distance/120);
    birda.scale =0.7
    birda.setlifetime=20;
    birdaG.add(birda);
}
    if(frameCount % 120 === 0){
    birdb=createSprite(windowWidth,Math.round(random(100,windowHeight-100)));
    birdb.addAnimation("flying",bird3);
    birdb.velocityX=-(3+3*distance/120);
    birdb.scale =0.4
    birdb.setlifetime=20;
    birdbG.add(birdb);
}
   
    if(frameCount % 140 === 0){
    birdc=createSprite(windowWidth,Math.round(random(100,windowHeight-100)));
    birdc.addAnimation("flying",bird4);
    birdc.velocityX=-(3+3*distance/120);
    birdc.scale =0.4
    birdc.setlifetime=20;
    birdcG.add(birdc);
}
   
    }
    
  function reset(){
   gameState=PLAY
   bird.addAnimation("flying",parrot);
   distance=0
   bird.scale=0.4;
   bird.x=120
   bird.y=200

  }  
    