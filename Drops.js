class Drops{
   constructor(x,y,radius){
     var options={
        friction: 0.001,
        restitution:0.1 
    }
    
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.body=Bodies.circle(this.x,this.y,this.radius,options)
    World.add(world,this.body)

   }

   update(){
    if (this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
      }
   
   }
  
   display(){
   fill("blue");
  ellipseMode(Center)
   ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
   }

}