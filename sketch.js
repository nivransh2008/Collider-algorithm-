

var movingRect, fixedRect, gameobject1, gameobject2; 
function setup() {
  createCanvas(1200,800);
  movingRect =createSprite(400, 200, 80, 30);
  movingRect.shapeColor='green';
  movingRect.debug=true;
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor='green';
  fixedRect.debug=true;
  gameobject1=createSprite(200,300,50,80)
  
  gameobject2=createSprite(800,500,80,30)
}

function draw() {
  background(255,255,255); 
  movingRect.x = World.mouseX;
  movingRect.y= World.mouseY;
  
  if (isTouching(movingRect,gameobject1)) {
    movingRect.shapeColor='red';
    gameobject1.shapeColor='red';
  }  
  else{
    movingRect.shapeColor='green';
   gameobject1.shapeColor='green';
  }

  drawSprites();
  
} 





































