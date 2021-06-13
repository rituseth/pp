/*pc (human)- skills- two images (human , the funny human )
npcs (diseases)-  skills - move randomely . 
the structure 
In this game Pacman is a human and the monsters are various
diseases. The blinky points are going to be the safe houses . And the
yellow dots will be as it is . If any disease touches you then th game 
resets. The more yellow dots you collect the more
points you will recevice .  If you cross 1000 points then there
is a twist . You will get the safe houses as well as the treatment for
avoiding a particular disease . Like in the pacman the monsters go
blue in colour whenever you get on of the bliny points. You will get all
this but the monsters ( diseases) will increase by 2
*/

  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;
  const Render = Matter.Render;
  var engine, world;
  var g ,g2,g3,g4,g5 , g6,g7,g8,g9,g10
  var g11,g12,g13,g14,g15,g16
  var g17,g18,g19,g20
  var f1,f2,f3,f4,f5,f6
  var h1 , h2, h3 , h4
  var begin ;
var gameState="start" ;
var PLAY =0
var END=1
var TWIST=2
 var h ,d1,d2,d3,d4
var score=0
 var p=20;
 var speedX=7
 var speedY = -5
  function preload ()
{
h1= loadImage("j.png ")
}
function setup (){
    createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    
 //begin
 begin = new Begin();


	g= new Ground (windowWidth/2,windowHeight,3000,20);
  //houses
g2 = new Ground (200,250,20,20)

g3 = new Ground (600,100,20,20)
g4 = new Ground(100,450,20,20)
g5 = new Ground(760,600,20,20)

// fence
f1=new Ground (200,290,330,10)
f2 = new Ground (40,150,10,300)
f3 = new Ground (348,235,10,100)
g6 = new Ground(550,100,10,500)
g7 = new Ground(450,250,10,300)
g8=  new Ground(300,190,200,10)
g9 = new Ground(198,140,10,100)
g10= new Ground(
330,100,250,10)
g11=new Ground (185,350,300,10)
g12=new Ground (30,490,10,290)
g13=new Ground(342,450,10,200)
g14=new Ground(580,355,50,10)
g15=new Ground(600,280,10,150)
g16=new Ground(660,200,150,10)
g17=new Ground(510,500,10,210)
g18=new Ground(689,500,200,10)
g19=new Ground(800,500,10,1000)
//boy
h= new Human(windowWidth/2,windowHeight-30,20,20)

//diseases

d1=new Npc(windowWidth/2-100, windowHeight/2-1000,10,PI/2)
d2=new Npc(windowWidth/2-200, windowHeight/2-1000,10 , PI/2)
d3=new Npc(windowWidth/2-500, windowHeight/2-1000,10 , PI/2)
d4=new Npc(windowWidth/2-50, windowHeight/2-1000,10 , PI/2)

score = score+1;



   var render = Render.create({
	element: document.body,
		engine: engine,
		options: {
	  width: 800,
height: 700,
		 wireframes: false
	}
	 });
 Render.run(render); 
 Engine.run(engine);
}



function draw (){
  background("blue");
console.log("gameState:"+gameState)
  if (gameState=== "start" ){
   
begin.display()
         
  }
else if (gameState === PLAY){
  g.display()
  g2.display()
  g3.display()
  g4.display()
  g5.display()
  g6.display()
  g7.display()
  g8.display()
  g9.display()
  g10.display()
  g11.display()
  g12.display()
  g14.display()
  g15.display()
  g16.display()
  g17.display()
  g18.display()
  g13.display()
  g19.display()
  f1.display()
  f2.display()
  f3.display()
h.display();

//

d1.movement()
d2.movement()
d3.movement()
d4.movement()

textSize(20)
fill ("black")
text ("Score : ", 700,20)
//setInterval(d1.movement(),1000/60)




}
}
