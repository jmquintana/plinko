function Base(x, y, w, h) {
    var options = {
        isStatic: true,
        restitution: 1,
        friction: 0
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    // this.r = r;
    World.add(world, this.body);
    
}

Base.prototype.show = function () {
    fill(0, 0, 255);
    stroke(0, 0, 255);
    var pos = this.body.position;
    // push();
    translate(pos.x, pos.y);
    rectangle(0, 900, 600, 20);
    // pop();
}