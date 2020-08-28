
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper;
var ground1;
var line;
//var box1,box2,box3;

//function preload()


function setup() {
 var canvas=createCanvas(4000, 750);//1700
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

  ground1 = new Ground(2000,650,4000,10); //850
  paper= new Paper(100,500);              

    box1=createSprite(2670,635,200,20);//1470,
	box1.shapeColor=color("white");

	box2=createSprite(2570,590,20,100);
	box2.shapeColor=color("white");

	box3=createSprite(2770,590,20,100);
	box3.shapeColor=color("white");

	var box1_options={
		isStatic: true
	}

    box1 = Bodies.rectangle(2670,635, 200, 20 ,box1_options );
	World.add(world, box1);
	
	var box2_options={
		isStatic: true
	}

    box2 = Bodies.rectangle(2570, 590, 20, 200 ,box2_options );
	World.add(world, box2);
	
	var box3_options={
		isStatic: true
	}

    box3 = Bodies.rectangle(2770, 590, 20, 200 ,box3_options );
	World.add(world, box3);
	
	line=createSprite(2000,325,3,750);
	line.shapeColor=color("red");
}


function draw() {
	background("black");
  Engine.update(engine);
   
//if(keyPressed()){}

  drawSprites();

 ground1.display();
 paper.display();
}

/*function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position, {x:200,y:-15});

	}
}*/

