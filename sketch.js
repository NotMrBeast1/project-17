
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime =0


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  bg = loadImage("j.jpg")
  re = loadImage("r.jpg")
}



function setup() {
  createCanvas(400,400)
  
   
  
  ground=createSprite(200,380,400,60)
  ground.velocityX=-1
  
  ground.scale =1.15
  
  mon = createSprite(50,300,10,10)
   mon.addAnimation("monk", monkey_running)
   mon.scale=0.150
  
  invisibleGround = createSprite(100,30,600,10);
  invisibleGround.visible = false;
  invisibleGround1 = createSprite(100,380,600,10);
  invisibleGround1.visible = false;
  
  bananaGroup = createGroup()
  obstacleGroup = createGroup()
}


function draw() {
  background('lightblue')

  if (ground.x < 195){
      ground.x = ground.width/2;
    }
  
  if(mon.isTouching(invisibleGround)){
    mon.velocityX=0
    mon.velocityY=3
  }
  if(mon.isTouching(invisibleGround1)){
    mon.velocityX=0
    mon.velocityY=0
  }
  if(keyWentDown("UP_ARROW")){
    mon.velocityY=-3
    mon.velocityX=1
  }
  if(mon.x>400){
    mon.x=10
  }
  
  ba()
  ob()
   r=createSprite(200,200,10,10)
  r.addImage(re)
  r.scale =0.7
  r.visible = false
  if(bananaGroup.isTouching(mon)){
    bananaGroup.destroyEach()
    
  }
  
  if(obstacleGroup.isTouching(mon)){
   r.visible =true
    b.visible = false
    
    o.visible=false
    
    
  }
  
  console.log(frameCount)
  
 
  if(mousePressedOver(r)){
   
    r.visible = false
    o.visible = false
b.visible = true

  survivalTime =0
  }
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50 )
  
  drawSprites()  
}
function ba(){
  if (frameCount % 80 === 0){
  b = createSprite(250,330,10,10)
  b.addImage(bananaImage)
  b.scale = 0.1
  b.velocityX=-3
  bananaGroup.add(b)
  
  
  }
}
function ob(){
  if (frameCount %100 === 0){
  o = createSprite(250,290,10,10)
  o.addImage(obstaceImage)
  o.scale = 0.3
  o.velocityX=-3
  obstacleGroup.add(o)
  
  
  }
}

function reset(){

  
}









