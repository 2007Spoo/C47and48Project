
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1;
var bgImg;;
var ground;
var bg= "ForestBg.jpg"
function preload()
{
	getBackgroundImg();
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
  block1= new Block(200, 200, 100,100);
	block2= new Block(250, 200, 100, 100);
	block3= new Block(300, 200, 100, 100);
	block4= new Block(350, 200, 100, 100);
	
  ground= new Ground(0,700, 1800, 100);
	Engine.run(engine);
     
}


function draw() {
  rectMode(CENTER);
  if(bgImg)
  background(bgImg);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
 
  ground.display();
  if (keyDown(RIGHT_ARROW) ) {
    block1.distance -= 10
    
  }
  if (keyDown(LEFT_ARROW)) {
    block2.distance += 10
  }
  drawSprites();
 
}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "ForestBg.jpg";
  }
  else{
      bg = "NightForestBg.jpg";
  }

  bgImg= loadImage(bg);
  console.log(bgImg);
}

