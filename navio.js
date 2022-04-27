class Navio{

    constructor(x,y,w,h,boatpos){
     this.body=Bodies.rectangle(x,y,w,h)
     World.add(world,this.body);
   
     this.w=w
     this.h=h
     this.boatposition=boatpos  
     this.image= loadImage('assets/boat.png')      

 
    }
   display(){
    var pos = this.body.position
    var angle = this.body.angle
      
   push()
   translate(pos.x,pos.y);
   rotate(angle);
   imageMode(CENTER);
   image(this.image,0,this.boatposition,this.w,this.h)
   pop()


   }
   remove(index){
    Matter.Body.setVelocity(this.body,{x:0,y:0})
    setTimeout(()=>{
        World.remove(world,navios[index].body)
       // delete navios[index]
    },2000)

   }
}
