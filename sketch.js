
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg;
var rocksImg, rocketImg, groundImg;
var Rocket, ground, rock1, rock2;

function preload()
{
	backgroundImg=loadImage("backgroudImg.png");
	rocksImg=loadImage("rocks.png");
	rocketImg=loadImage("Rocket.png");
	groundImg=loadImage("ground.png")
}

function setup() {
	createCanvas(displayWidth, displayHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = createSprite(800,800,400,20);
	ground.addImage(groundImg);
	ground.x = ground.width /2;
	ground.velocityX = -6;

	rock1=createSprite(200,600);
	rock1.addImage(rocksImg);
	rock1.scale=0.35;

	rock2=createSprite(1200,600);
	rock2.addImage(rocksImg);
	rock2.scale=0.35;

	Rocket=createSprite(200,400);
	Rocket.addImage(rocketImg);

	//rock.velocityX=1;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  
  if (ground.x < 0){
	ground.x = ground.width/2;
  }

  if (frameCount % 60 === 0) {
    var fireBall = createSprite(600,120,40,10);
    fireBall.y = Math.round(random(80,700));
    //cloud.addImage(cloudImage);
    //cloud.scale = 0.5;
    fireBall.velocityX = -3;
    
     //assign lifetime to the variable
	fireBall.lifetime = 200;
  }

  if (frameCount % 60 === 0) {
    var star = createSprite(600,120,40,10);
    star.y = Math.round(random(80,700));
    //cloud.addImage(cloudImage);
    //cloud.scale = 0.5;
    star.velocityX = -3;
    
     //assign lifetime to the variable
	fireBall.lifetime = 200;
  }

  drawSprites();
 
}



