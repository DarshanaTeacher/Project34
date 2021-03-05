const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var sling1, sling2, sling3, sling4, sling5;

function setup() {
  createCanvas(windowWidth/2, windowHeight/1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };

  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  bob1 = new Pendulum(600, 400, "blue");
  sling1 = new Sling(bob1.body, {x: 600, y: 100});

  bob2 = new Pendulum(200, 400, "green");
  sling2 = new Sling(bob2.body, {x: 200, y: 100});

  bob3 = new Pendulum(300, 400, "yellow");
  sling3 = new Sling(bob3.body, {x: 300, y: 100});

  bob4 = new Pendulum(400, 400, "orange");
  sling4 = new Sling(bob4.body, {x: 400, y: 100});

  bob5 = new Pendulum(500, 400, "red");
  sling5 = new Sling(bob5.body, {x: 500, y: 100});
  
  Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  background(180);
  Engine.update(engine);


  bob1.display();
  sling1.display();

  bob2.display();
  sling2.display();

  bob3.display();
  sling3.display();

  bob4.display();
  sling4.display();

  bob5.display();
  sling5.display();

}

function mouseDragged(){
  Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY})
}