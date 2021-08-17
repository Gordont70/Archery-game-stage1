const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas, player, cplayer, pbase, cbase;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	

   //Create Player Base and Computer Base Object
  pbase = new PBase(300, random(450, height-300), 180,150)
  player = new Player(285,pbase.body.position.y - 153, 50, 180)

  cbase = new PBase(1200, random(450, height-300), 180,150)
  cplayer = new Player(1200,cbase.body.position.y - 153, 50, 180)


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   pbase.display()
   cbase.display()


   //display Player and computerplayer
   player.display()
   cplayer.display()


}
