const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball;

groundobj = new Ground(width/2,670,width,20);
leftside = new Ground(1100,600,20,120);
rightside = new Ground(1350,600,20,120);

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	
	ball = Bodies.circle(50,380,20,20,ball_options)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundobj.display();
  leftside.display();
  rightside.display();
  drawSprites();
  
}

function keyPressed(){
if (keyCode === UP_ARROW){

	Matter.body.applyForce(ball,{x:0,y:0},{x:85, y:-85})
}
}



