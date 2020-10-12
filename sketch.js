var wall, thickness;
var bullet, speed, weight;
var damage;

var bulletRightEdge, wallLeftEdge;

var PLAY;
var END;
var gamestate;

function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(50, 200, 100, 50);
  bullet.shapeColor = color(255,255,255);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  
  thickness = Math.round(random(22,83));
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  damage = 0.5* weight* speed* speed/(thickness*thickness* thickness);

  PLAY = 1;
  END = 0;
  gamestate = PLAY;
}

function draw() {

  background(0,0,0);

  if(gamestate === PLAY){
   bullet.velocityX = speed;
  }

  if(collide(bullet,wall)){

    gamestate = END;

    if(gamestate === END){
    
      bullet.velocityX = 0;
      bullet.x = wall.x - (thickness/2 + bullet.width/2);

      textSize(20);
      fill(color(255,255,255));
      text("damage : " + damage,1300,30);
      text("bullet speed : "+ speed,1300,60);
      text("bullet weight : "+ weight,1300,90);
      text("wall thickness : "+ thickness,1300,120);
  
      if(damage < 10){
  
       wall.shapeColor = color(0,255,0);
       
       fill(color(255,255,255));
       textSize(25);
       text("Press Space To Restart",630,220);
      }
  
     if(damage > 10){
       
       wall.shapeColor = color(255,0,0);
       
       fill(color(255,255,255));
       textSize(25);
       text("Press Space To Restart",650,220);
      }  
  
     if(keyDown("space") && gamestate === END){
        restart();   
      }
  }
  }

  drawSprites();
}

 function collide(bullet,wall){

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

   if(bulletRightEdge >= wallLeftEdge){

    return true;
   } else {

    return false;
   }
 }

 function restart(){
    
   gamestate = PLAY;
   bullet.shapeColor = color(255,255,255);
   wall.shapeColor = color(80,80,80);
   bullet.x = 50;
   thickness = Math.round(random(22,83));
   speed = Math.round(random(223,321));
   weight = Math.round(random(30,52));
   damage = 0.5* weight* speed* speed/(thickness*thickness* thickness); 
 }