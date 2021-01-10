





var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint 

function preload()
{
tree = loadImage("tree.png")
boy = loadImage("boy.png")
} 

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	





	engine = Engine.create();
	world = engine.world;


	




	mango1 = new Box(500,300,50,50)
  ground = new Box(550,670,3000,30)
  tree1 = new Box(700,610,1,1)
  boy1 = new Box(200,610,100,100)
	rope1 = new Rope(mango1.body,{x:550,y:220})
  


	
  
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  drawSprites();
  mango1.display()

  tree1.display()
  ground.display()
  boy1.display()
  rope1.display()

  image(tree,400,270,400,400)
  image(boy,150,500,200,200)
  image(mango1Img,500,300,50,50)
  

ground.body.isStatic = true
//   Matter.Body.setStatic(box1.body,true);
//   Matter.Body.setStatic(box1.body,true);
//   Matter.Body.setStatic(box1.body,true);

}




  













