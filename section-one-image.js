// documentation:
// https://github.com/kittykatattack/learningPixi/blob/master/examples/09_movingSprites.html
// https://github.com/kittykatattack/learningPixi#sizenscale
// http://pixijs.github.io/examples/#/basics/basic.js

var renderer = PIXI.autoDetectRenderer(900, 420);
document.getElementById('section-one-animation').appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();
    renderer.backgroundColor = 0xffffff;

var count = 0;

// build a rope!
var ropeLength = 9000 / 100;

var points = [];

for (var i = 0; i < 20; i++)
{
    points.push(new PIXI.Point(i * ropeLength, 0));
}


// var snakeTwo = new PIXI.mesh.Rope(PIXI.Texture.fromImage('section-one-face-image.jpg'), points);
var face = new PIXI.mesh.Rope(PIXI.Texture.fromImage('section-one-face-image.jpg'), points);
var bed = new PIXI.mesh.Rope(PIXI.Texture.fromImage('bed-image.png'), points);
// snakes
face.x = -59;
face.height = 20;
bed.x = -55;
bed.y = 500;

bed.width = 80;
bed.height = 1200;

// making the snake container
var sectionContainer = new PIXI.Container();

    sectionContainer.position.x = 250;
    sectionContainer.position.y =  130;

sectionContainer.scale.set(400 / 1220);
stage.addChild(sectionContainer);

// add the snakes to the container
sectionContainer.addChild(face);
sectionContainer.addChild(bed);

// start animating
requestAnimationFrame(animate);

function animate() {

    count += 0;

    // make the snake
    for (var i = 0; i < points.length; i++) {

        points[i].y = Math.sin((i * 0) + count) * 0;
        points[i].x = i * ropeLength + Math.cos((i * 0) + count) * 0;
    }

    // render the stage
    renderer.render(stage);
    requestAnimationFrame(animate);
}

