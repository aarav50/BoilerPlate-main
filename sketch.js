const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var enigine
var ground
var world
var box
var b
var bb
function setup() 
{
  createCanvas(1200,700);
enigine=  Engine.create()
world=enigine.world

ground=new aaa(200,700,80,80)
box=new a(200,200)
b= new aa(200,200)
  bb=new SlingShot(b.body,{x:200,y:200})
}

function draw() 
{
  background("#000000");
  Engine.update(enigine)
 
  ground.display()
box.display()
b.display()
 bb.display()
   
}
function mouseDragged(){
  Matter.Body.setPosition(b.body,{x:mouseX,y:mouseY})
}