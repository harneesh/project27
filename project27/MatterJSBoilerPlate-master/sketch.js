
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, rope1, rope2, rope3, rope4, rope5;
var bob1, bob2, bob3, bob4, bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(350, 150, 500, 20);

	bob1 = new Bob(200, 400);

	bob2 = new Bob(250, 400);

	bob3 = new Bob(300, 400);

	bob4 = new Bob(450, 400);
	
	bob5 = new Bob(500, 400);

	rope1 = new Rope(bob1.body, roof.body, {x : 150, y : 150});

	rope2 = new Rope(bob1.body, roof.body, {x : 250, y : 150});

	rope3 = new Rope(bob1.body, roof.body, {x : 350, y : 150});

	rope4 = new Rope(bob1.body, roof.body, {x : 450, y : 150});

	rope5 = new Rope(bob1.body, roof.body, {x : 550, y : 150});
	
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();

  drawSprites();
 
}



