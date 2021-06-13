class Npc{
    constructor(x,y,r,angle) {
      var options = {
        isStatic:false,
          restitution:0.9,
          friction:0.2,
          density:0.8
      }
      this.body = Bodies.circle(x,y,r,options);
      Matter.Body.setAngle(this.body, angle);  
   this.r=r
      World.add(world, this.body);
    }

    movement(){
  if (frameCount % 30===0){
    this.body.position.x = Math.round(random(0,400))
    var angle = this.body.angle;
     
    push();
 
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
   setVelocity(this.body,{x:this.body.speedX,y: this.body.speedY })
speedX+=7
speedY+=-5

angle=angle+90
    ellipseMode(CENTER);
    fill ("white")
    ellipse( 0,0,this.r);
    pop();

  }
    }}


  //  display(){
        
  //  }

  //};