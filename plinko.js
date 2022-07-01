function Plinko(x, y, r) {
    var options = {
        isStatic: true,
        restitution: 0.5,
        friction: 0.2
    }
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(world, this.body);
    
}

Plinko.prototype.show = function () {
    fill(217, 0, 50);
    noStroke();
    // stroke(217, 0, 50);
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipse(0, 0, this.r * 2);
    pop();
}