class Base 
{
  constructor(x, y, w,h) 
  {
    var options = {
     isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    rectMode(CENTER);
    noStroke();
    fill(165,42,42);
    rect(pos.x,pos.y, this.w, this.h);
    pop();
  }


  detach(){
    World.remove(world,this.body);

   }
}



