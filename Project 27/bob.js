class bob{
    constructor(x, y, radius, angle) {
        var options = {
            'restitution':0.8,
            'friction':10,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, [options]) 
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        fill("grey");
        circle(pos.x, pos.y, this.radius);
        rotate(angle);
        pop();
        
        if(keyWentDown("up")){
          Body.applyForce(this.body,{x:this.body.position.x, y:this.body.position.y},{x:0.02,y:-0.04})
        }
      
      }
}