var mario,marioAnimation;
var ground,groundImage;



function preload(){
groundImage = loadImage("ground2.png");
marioAnimation = loadAnimation("mario00.png","mario01.png","mario02.png","mario03.png");

}

function setup(){
  createCanvas(600,400);
  mario = createSprite(50,337,10,10);
  mario.scale = 1.3 ;
  mario.addAnimation("mario_run",marioAnimation);
  ground = createSprite(300,400,690,100)
  ground.addImage(groundImage);
}

function draw(){
  background("lightblue");
  background("lightblue");
   mario.velocityY = mario.velocityY + 0.8
  ground.velocityX = -4;
  
 if (ground.x < 0){
    ground.x = ground.width/2;
  } 
       if(keyDown("space")&& mario.y >= 300) {
    mario.velocityY = -13;

  }
    mario.collide(ground);
 
  drawSprites();
}