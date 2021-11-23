
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5,rope1,rope2,rope3, rope4,rope5,roof1;
var world;


function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	
	bob1 = new bob(350,400,50)
	bob2 = new bob(400,400,50)
	bob3 = new bob(450,400,50)
	bob4 = new bob(500,400,50)
	bob5 = new bob(550,400,50)
	rope1=new rope(bob1.body,{x:350,y:100})
	rope2=new rope(bob2.body,{x:400,y:100})
	rope3=new rope(bob3.body,{x:450,y:100})
	rope4=new rope(bob4.body,{x:500,y:100})
	rope5=new rope(bob5.body,{x:550,y:100})
	roof1=new roof(450,100,300,20)
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(255,255,255));
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position, {x:-30,y:155});
	}
}





