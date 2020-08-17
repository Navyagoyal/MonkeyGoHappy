var bananaImage,obstacleImage,obstaclesGroup,backgrd, score, player,backImage,player,player_running,ground;
var foodGroup;
var obstaclesGroup;

function preload(){
  backImage=loadImage("jungle.png");
  
  player_running=loadAnimation("Monkey_01.png","Monkey_02.p  ng","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage=loadImage("banana.png");
  
  obstacleImage=loadImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
  backgrd = createSprite(0,0,400,400);
  backgrd.addImage("backImage",backgrd);
  backgrd.velocityX=-2;
  
  ground = createSprite(10,390,400,5);
  ground.visible=false;
  
  player = createSprite(200,390,20,30);
  player.addAnimation("player_running",player);
  player.scale=0.1;
  
  foodGroup=newGroup();
  obstaclesGroup=newGroup();
  
  var score=0;
}

function draw() {
  background(220);
  
  if(backgrd.x < 0)
  {
  backgrd.x=backgrd.width/2;
  }
  if(foodGroup.isTouching(player))
  {
    score=score+2;
    foodGroup.destroy();
  }
  switch(score){
    case 10: player.scale=0.12;
            break;
    case 20: player.scale=0.14;
            break;
    case 30: player.scale=0.16;
            break;  
    case 40: player.scale=0.18;
            break;
    default: break;
  }
  
  if(obstaclesGroup.isTouching(player))
  {
    player.scale=0.2;
  }
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("SCORE : "+score,500,50);
}

function foodGroup()
{
  var fruit=createSprite(20,10,20,30);
  fruit.addImage(bananaImage);
  fruit.velocityY=3;
  foodGroup.add(fruit);
}

function obstaclesGroup()
{
  var obstacle=createSprite(400,390,30,40);
  obstacle.addImage(obstacleImage);
  obstacleGroup.add(obstacle);
}