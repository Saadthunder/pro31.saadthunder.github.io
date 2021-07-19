const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var base;
var bridge;
var jointPoint;
var stones=[];
var stone;
var stone2;
var stone3;
var stone4;
var stone5;
var stone6;
var stone7;
var stone8;


function preload(){
zombie1 = loadImage("./assets/zombie.png");
zombie2 = loadImage("./assets/zombie.png");

zombie3 = loadImage("./assets/zombie.png");
zombie4 = loadImage("./assets/zombie.png");
axeImg=loadImage("./assets/axe.png")

backgroundImage = loadImage("./assets/background.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
 
  wall1=new Base(10,240,200,100);
  wall2=new Base(width-25,240,200,100);
  bridge=new Bridge(32,{x:50,y:229});
  jointPoint=new Base(width-65,229,200,100);
  Matter.Composite.add(bridge.body,jointPoint);
  jointLink = new Link(bridge, jointPoint);
  for(var i=0; i<=8; i++) {
    var x = random(width/2-200,width/2+300);
    var y = random(-10,50);
    stone =new Stone(x,y,45);
    stones.push(stone)
  }
  
  for(var i=0; i<=8; i++) {
    var x = random(width/2-200,width/2+300);
    var y = random(-10,50);
    stone2 =new Stone(x,y,45);
    stones.push(stone2);
  }

  for(var i=0; i<=8; i++) {
    var x = random(width/2-200,width/2+300);
    var y = random(-10,50);
    stone3 =new Stone(x,y,45);
    stones.push(stone3)
  }
  
  for(var i=0; i<=8; i++) {
    var x = random(width/2-200,width/2+300);
    var y = random(-10,50);
    stone4 =new Stone(x,y,45);
    stones.push(stone4)
  }
  

  for(var i=0; i<=8; i++) {
    var x = random(width/2-200,width/2+300);
    var y = random(-10,50);
    stone5 =new Stone(x,y,45);
    stones.push(stone5)
  }
  
  for(var i=0; i<=8; i++) {
    var x = random(width/2-200,width/2+300);
    var y = random(-10,50);
    stone6 =new Stone(x,y,45);
    stones.push(stone6);
  }

  for(var i=0; i<=8; i++) {
    var x = random(width/2-200,width/2+300);
    var y = random(-10,50);
    stone7 =new Stone(x,y,45);
    stones.push(stone7)
  }
  
  for(var i=0; i<=8; i++) {
    var x = random(width/2-200,width/2+300);
    var y = random(-10,50);
    stone8 =new Stone(x,y,45);
    stones.push(stone8);

  }
  
   zombie=createSprite(width/4,height-110);
   zombie.addAnimation("lefttoright",zombie1,zombie2,zombie1);
   zombie.addAnimation("righttoleft",zombie3,zombie4,zombie3);
   zombie.scale=0.1;
   zombie.velocityX=10;

   button=createButton("axeImg");
   button.position(width-200,height/2-50);
   button.size(50,50);
   button.mouseClicked(handleButtonPress);





  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() {
  background(51);
  drawSprites();
  wall1.show();
  wall2.show();
  bridge.show();
  
  stone.show();
  stone2.show();
  stone3.show();
  stone4.show();
  stone5.show();
  stone6.show();
  stone7.show();
  stone8.show();
  Engine.update(engine);
}

function handleButtonPress(){
  jointPoint.detach();
  jointLink.detach();
setTimeout(() => {
  bridge.break();
},1500);
 
 
 
 
 }