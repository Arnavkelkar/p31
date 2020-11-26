const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var div1,div2,div3,div4;
var engine,world;

var Particles = [];
var Plinkos = [];

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,800,480,20);
  div1 = new Division(0,650,10,280);
  div2 = new Division(80,650,5,280);
  div3 = new Division(160,650,5,280);
  div4 = new Division(240,650,5,280);
  div5 = new Division(320,650,5,280);
  div6 = new Division(400,650,5,280);
  div7 = new Division(480,650,10,280);

  for(var j=40; j<=width; j=j+50){
   Plinkos.push(new Plinko(j,75)) 
  }
}

function draw() {
  background(0,200,255);  
  ground.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
}