class Stone {
constructor(x,y,radius){
var options={
    density:0.0001
};
       
       this.body = Bodies.circle(x, y,radius,options);
       this.radius=radius;
       World.add(world, this.body);



}
show(){
    var pos = this.body.position;
    push();
    ellipseMode(RADIUS);
    noStroke();
    fill("yellow");
    ellipse(pos.x,pos.y, this.radius);
    pop();

}
}