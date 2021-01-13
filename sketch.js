var myEngine , myWorld, ground;

function setup() {
  createCanvas(800,400);
  
  myEngine  = Matter.Engine.create();
  myWorld   = myEngine.world;

var options = {

  isStatic: true

}

 ground  =  Matter.Bodies.rectangle(400,400,800,20,options);
 Matter.World.add(myWorld, ground);

box1  = new Box(400,100,50,50);
box2 = new Box(430,50,100,40);

  console.log(box2);
}



function draw() {

  Matter.Engine.update(myEngine);


  background(0);  
  fill("brown");
  rectMode(CENTER);
  

  box1.display();
  box2.display();
  rect(ground.position.x, ground.position.y,800,20);
}