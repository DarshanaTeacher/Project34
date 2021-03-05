class Pendulum{
    constructor(x, y, color)
    {
        var options = {
            density: 5,
            mass: 5,
            restitution:1,
            friction:0,
            slop:1,
            frictionAir:0.0,
            inertia:Infinity,
        }

        this.body = Bodies.circle(x, y, 50, options);
        this.x = x;
        this.y = y;
        this.color = color
        World.add(world, this.body);
    }

    display()
    {
        var angle = this.body.angle;

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipse(0, 0, 100, 100);
        pop();
    }
}