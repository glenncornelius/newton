var roof1, bob1,bob2,bob3,bob4,bob5;
var c1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof1=new roof(400,200,600,20)

	  bob1=new bob(205,420,20);
    
    c1 = new cable(bob1.body,roof1.body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
  bob1.display();
  c1.display();
  drawSprites();
 console.log(mouseX+ " "+mouseY);
}



