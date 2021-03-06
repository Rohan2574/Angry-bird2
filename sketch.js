const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1,box2 ;
var backgroundImg

function preload(){
    backgroundImg=loadImage("bg.png")

}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    // bg=createSprite(600,200,1200,400)
    // bg.addImage(backgroundImg)

    ground=new Ground(600,390,1200,10);

    box1=new Box(700,320,70,70);
    box2=new Box(900,320,70,70);

    pig1=new Pig(800,320);
    
    log1=new Log(800,260,300,PI/2);

    box3=new Box(700,240,70,70);
    box4=new Box(900,240,70,70);

    pig2=new Pig(800,220);

    log2=new Log(800,180,300,PI/2);

    box5=new Box(800,160,70,70);

    log3=new Log(750,120,150,PI/7);

    log4=new Log(860,120,150,PI/-7);

    bird=new Bird(100,100)
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    // drawSprites();
    ground.display();
    box1.display();
    box2.display();
    pig1.display()
    log1.display()
    box3.display();
    box4.display();
    pig2.display()
    log2.display()
    box5.display()
    log3.display()
    log4.display()
    bird.display()
    
}