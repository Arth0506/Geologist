const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, rubber1, rubber2, rubber3, rubber4, stone, iron, diamond;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(200, 500, 15);
    rubber2 = new Rubber(230, 500, 15);
    rubber3 = new Rubber(260, 500, 15);
    rubber4 = new Rubber(290, 500, 15);

    stone = new Stone(450, 470, 75, 65);

    iron = new Iron(700, 450, 105, 95);

    diamond = new Diamond(1000, 450, 135, 120);



}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    stone.display();
    iron.display();
    diamond.display();
    
 
}