const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var Umbrella1;
var ground1;
var thunderbolt1,thunderbolt2,thunderbolt3,thunderbolt4,thunder;
var drops=[]
var maxDrops=100;
var thunderCreatedFrame=0;

function preload(){
  thunderbolt1=loadImage("1.png");
  thunderbolt2=loadImage("2.png");
  thunderbolt3=loadImage("3.png");
  thunderbolt4=loadImage("4.png");
}

function setup(){

    createCanvas(900, 400);
   
    engine = Engine.create();
	world = engine.world;
    Engine.run(engine);

    Umbrella1=new Umbrella(200,150);
    ground1=new Ground(100,200,300,10);

     if(frameCount%50===0){
    for(var i=0; i<maxDrops; i++){
        drops.push(new createDrops(random(0,400), random(0,400)) )   
    }
     }
    Engine.run(engine);
  
}

function draw(){
    rectMode(CENTER);
    background(0);
    Engine.update(engine);
    rand = Math.round(random(1,4));
   
    if (frameCount%150===0){
      thunderCreatedFrame=frameCount;
      thunder=createSprite(random(10,370), random(10,30), 10, 10)
      switch(rand){
       case 1:
         thunder.addImage(thunderbolt1);
         break;
       case 2:
         thunder.addImage(thunderbolt2);
         break;
       case 3:
         thunder.addImage(thunderbolt3);
         break;
       case 4:
         thunder.addImage(thunderbolt4);
         default: break;
      }
      thunder.scale = random(0.3,0.6)
    }
      if(thunderCreatedFrame+10===frameCount){
          thunder.destroy()
      }

    Umbrella1.display();
    for(var i=0; i<maxDrops; i++){
        drops[i].update;
        drops[i].display();
    }

    drawSprites();
}   

