const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var hr,minute,second
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  hr = hour()
  mn = minute()
  sc = second()

  angleMod(DEGREES)

  scAngle = map(SC,0,60,0,360)

 stroke(255,0,0)
 strokeWeight(7)
 line(0,0,100,0)

 arc(50,55,50,50,0,HALF_PI)
 nofill()
 
  drawSprites();
}