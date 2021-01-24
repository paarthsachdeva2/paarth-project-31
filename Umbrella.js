class Umbrella{
    constructor(x,y,radius){    
       var options={
      isStatic:true,

       }
     this.x=x;
     this.y=y;
     this.radius=radius;
     this.image=loadImage("walking_4.png");
     this.body=Bodies.circle(this.x,this.y,this.radius,options);
     World.add(world,this.body)
   
    }
     display(){
    var pos=this.body.position
    push()
    translate(pos.x,pos.y)
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
    pop();
     }
  
}