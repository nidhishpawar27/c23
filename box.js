class Box {


constructor(x,y,w,h){

    var options1 = {

        restitution:1,
        density : 0.1,
        friction:0.5
       
       }
       
       this.body= Matter.Bodies.rectangle(x,y,w,h,options1)
         Matter.World.add(myWorld, this.body);
         this.w  = w;
         this.h =  h;

}



display(){

    var angle  = this.body.angle;
    push ();
    translate (this.body.position.x, this.body.position.y)
    rotate(angle);
    rect(0,0,this.w,this.h);
    pop ();
}


}