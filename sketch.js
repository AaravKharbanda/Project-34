const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hero,monster,rope,ground;

var box1 =[]
var box2 =[]
var box3 =[]

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);
  
  //box 1
  for(var i = 0; i<10;i++){
		box1.push(new Box(750,90,50,50))
	}

  //box2
  for(var i = 0; i<11;i++){
		box2.push(new Box(850,310,50,50))
	}
  //box3
 for(var i = 0; i<12;i++){
  box3.push(new Box(650,390,50,50))
  } 
}

 


function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

  //box1
  for(var i = 0;i<box1.length; i++){
    box1[i].display()
    }
    
  //box2
  for(var i = 0;i<box2.length; i++){
    box2[i].display()
    }

  //box3
  for(var i = 0;i<box3.length; i++){
    box3[i].display()
    }

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
	Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}
