class BaseClass{
    constructor(x,y,w,h,angle){
        var options ={
            isStatic: false,
            restitution:0.1,
            friction:0.9
        }
        this.image=loadImage("base.png")
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        World.add(world,this.body); 
    }
    display(){
        
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("yellow");
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop()   
    }
}