var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
    Events = Matter.Events;

var engine;
var world;
var particles = [];
var plinkos = [];
var bounds = [];
var boundWidth = 6;
var cols = 11;
var rows = 5;
var r = 4;

function setup() {
    createCanvas(700, 700);
    colorMode(HSB);
    engine = Engine.create();
    world = engine.world;
    engine.enableSleeping = true

    newParticle();

    var spacing = width / cols;
    var offx = 0;
    for (var j = 1; j <= rows; j++) {
        for (var i = 1 - j; i <= cols; i++) {
            var p = new Plinko(i * spacing + offx / 2, j * spacing - 20, 6);
            if(i > 3 - (j) && i < cols-2 ){
                plinkos.push(p);
            }
        }
        offx += spacing;
    }
    var b = new Boundary(width / 2, height + 50, width, 100, 0, 0, 0);
    
    bounds.push(b);

    for (var i = 0; i <= cols * 2 ; i++) {
        var x = i * spacing / 2 ;
        var y = 3/4 * height;
        var w = boundWidth;
        var h = height / 2;
        var b = new Boundary(x, y, w, h, 0, 0, 0)
        bounds.push(b);
    }

    var c = new Boundary(height/8, height / 4, boundWidth, sqrt(sq(height/2)+sq(height/4)), atan(1/2), 5, 5)
    var d = new Boundary(width-height/8, height / 4, boundWidth, sqrt(sq(height/2)+sq(height/4)), -atan(1/2), 5, 5)
    bounds.push(c);
    bounds.push(d);


//     function estaDormida(e) {
//         console.log(e);
//     }

//     Matter.Events.on(Bodies.circle, "sleepStart", estaDormida);

}

function newParticle() {
    var p = new Particle(width / 2 + random(-4, 4), -50, 6);
    particles.push(p);
}


function draw() {
    if (frameCount % 1 == 0) {
        if (particles.length < 600) {

            // while (particles.length < 500) {
            newParticle();
            // console.log(particles.length);
            // }
        }
    }

    background(217, 80, 29);
    Engine.update(engine, 1000 / 60);

    for (var i = 0; i < particles.length; i++) {
        particles[i].show();
        if (particles[i].isOffScreen()) {
            World.remove(world, particles[i].body);
            particles.splice(i, 1);
            i--;
        }
    }



    for (var i = 0; i < particles.length; i++) {
        if (particles[i].isStatic()) {
            Matter.Body.setStatic(particles[i].body, true);
        }
    }

    for (var i = 0; i < bounds.length; i++) {
        bounds[i].show();
    }

    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].show();
    }

}