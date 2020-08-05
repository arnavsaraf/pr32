const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygon,slingShot,score = 0;

var engine, world;
function preload()
{
  getBackgroundimage();
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  platform =new Ground (400,280,400,10);
  block1 =new Box (330,265,30,40);
  block2 =new Box (360,265,30,40);
  block3 =new Box (390,265,30,40);
  block4 =new Box (420,265,30,40);
  block5=new Box (450,265,30,40);
  block6 =new Box (360,225,30,40);
  block7 =new Box (390,225,30,40);
  block8 =new Box (420,225,30,40);
  block9 =new Box (390,165,30,40);
  polygon1=new Polygon (200,100,50,50)
  //var options={
  //  restitution:0.3
 // }
 // polygon=Bodies.circle(50,200,20,options);
 // World.add(world,polygon);
  slingShot =new SlingShot(polygon1.body,{x:100,y:200})
  
}

function draw() {
  background(0);  
  Engine.update(engine)
 // drawSprites();
  platform.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  polygon1.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  text("SCORE : "+score,700,40);
  //ellipseMode(RADIUS)
 // ellipse (polygon.position.x,polygon.position.y,20,20)
  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed (){
  if(keyCode === 32)
  {
    slingShot.attach(polygon1.body);
  }
}
async function getBackgroundimage()
{
 var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
 var responseJSON = await response.json();
 var datetime = (responseJSON.datetime);
 var hour = datetime.slice(11,13);
 if(hour>=06 && hour<=19)
 {
bg = "sprites/bg.png"
 }
 else{
bg = "sprites/bg2.png"
 }
 backgroundImg = loadImage (bg);
}