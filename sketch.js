const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 var myengine;
 var myworld;
 var ball1;
 var ball2;
 var ball3;
 var ball4;
 var ball5;
 var longbody;
 var ground;
 var chain1;
 var chain2;
 var chain3;
 var chain4;
 var chain5;

function setup()
 {
	createCanvas(600, 600);

	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create the Bodies Here.
    ball1 = new Ball(100,400,20)
	  ball2 = new Ball(200,400,20)
	  ball3 = new Ball(300,400,20)
    ball4 = new Ball(400,400,20)
	  ball5 = new Ball(500,400,20)

    var ballDiameter=60
    

	longbody = new Longbody(300,100,300,10)
  

 ground = new Ground(300,588,578,10)

 chain1 = new Chain(ball1.body,longbody.body,-ballDiameter*2,0)
   chain2 = new Chain(ball2.body,longbody.body,-ballDiameter*1,0)
   chain3 = new Chain(ball3.body,longbody.body,0,0)
   chain4 = new Chain(ball4.body,longbody.body,ballDiameter*1,0)
   chain5 = new Chain(ball5.body,longbody.body,ballDiameter*2,0)
	  
   Engine.run(myEngine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("lightblue");
  Engine.update(myEngine)
  drawSprites();
 
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()

  longbody.display()
  

  chain1.display()
   chain2.display()
   chain3.display()
    chain4.display()
    chain5.display()
 // ground.display()
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
 Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-500,y:-45})
  }
}

