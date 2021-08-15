var garden,rabbit;
var gardenImg,rabbitImg;
var appleImage;
var leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbitVelocityX = mouseX;

var rand =  Math.round(random(90,100))
  console.log(rand)
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  if (keyIsDown(RIGHT_ARROW))
  {
  rabbit.position.x = rabbit.position.x +3;
  rabbit.velocityX = 5;
  }

  if (keyIsDown(LEFT_ARROW))
  {
    rabbit.position.x = rabbit.position.x -3;
    rabbit.velocityX = -5;
  }

  createApples();
  createLeaves();

  drawSprites();
}

function createApples(){
  if (frameCount % 80 == 0) {
    apple = createSprite(50, 100);
    apple.addImage(appleImage);
    apple.x = Math.round(random(50, 100));
    apple.scale = 0.07;
    apple.velocityY = 5;
    
    apple.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;
    console.log("apple depth : " +apple.depth);
    console.log("rabbit depth : " +rabbit.depth);
  }
}

function createLeaves(){
  if (frameCount % 100 == 0) {
    leaf = createSprite(50, 100);
    leaf.addImage(leafImg);
    leaf.x = Math.round(random(50, 100));
    leaf.scale = 0.07;
    leaf.velocityY = 5;
  }
}