function Particle(x, y, r) {
    var options = {
        restitution: 0.8,
        friction: 0.9,
        density: random(0.001,1),
        sleepThreshold: 25,
    }
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;

    // console.log(this.body);
    // function estaDormida(e) {
    //     console.log(e);
    // }
    // Matter.Events.on(this.body, "sleepStart", estaDormida);



      World.add(world, this.body);
    
}

Particle.prototype.isOffScreen = function(){
    var x = this.body.position.x;
    return (x < -10 || x > width + 10 )
}

Particle.prototype.isStatic = function(){
    var y = this.body.position.y;
    // if (y > height / 2 ){
    Matter.Events.on(this.body, "sleepStart", () => {
            Matter.Body.setStatic(this.body, true);
        });
    // }

}

Particle.prototype.show = function () {
    fill(217, 50, 255);
    noStroke();
    // stroke(217, 80, 255);
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipse(0, 0, this.r * 2);
    pop();
}