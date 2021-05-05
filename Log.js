class Log extends BaseClass{
    constructor(x,y,h,angle){
        super(x,y,20,h)
        Matter.Body.setAngle(this.body,angle)
        this.image=loadImage("wood2.png");
    }
    
}