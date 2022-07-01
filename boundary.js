function Boundary(x, y, w, h, a) {
    var options = {
        isStatic: true,
        angle: a,
        chamfer: {
            radius: [5, 5, 0, 0]
        }
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    
}

Boundary.prototype.show = function () {
    fill(217, 0, 50);
    noStroke();
    // stroke(217, 0, 50);
    var pos = this.body.position;
    var angle = this.body.angle;
    // var lu = this.body.options.chamfer.radius[0];
    // var ru = this.body.options.chamfer.radius[1];
    // console.log(lu);
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h, 5, 5, 0, 0);
    pop();
}