
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall, ground1, bin1, bin2, bin3;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.

	ground1 = new ground(1000,650,2000,10)
	paperBall = new paper(50,100,40,40)
	bin1 = new bin(965,550,30,200)
	bin2 = new bin(1080,630,200,30)
	bin3 = new bin(1190,550,30,200)

	Engine.run(engine);
}


function draw() {
  
  background(0);
  
  ground1.display();
  paperBall.display();
  bin1.display();
  bin2.display();
  bin3.display();

  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:385,y:-385})
	}
}

