class Particles{
    constructor(x,y,radius) {

        var options = {
          'restitution':0.01,
          'friction':1.0,
          'density':1.0
        }
        
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        this.color=color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
    }

    display() {
        push();
        stroke("white");
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius);
        pop();
    }

}