var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(50,80);
  weight=random(400,1500);
  thickness=random(50,100);
  bullet = createSprite(50,200,50,20);
  wall = createSprite(1000, 200, thickness, height/2);
  bullet.velocityX = speed;
  
}

function draw() {
  background(255,255,255);  
  
  if(hascollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor = "red"
    }
    if(damage<10){
      wall.shapeColor = "green" 
    }
  }
  drawSprites();
}
function hascollided(object1,object2){
  bulletX= object1.x+ object1.width;
  wallX = object2.x;
  if(bulletX>=wallX){
    return true;
  }
  else{
    return false;
  }
}