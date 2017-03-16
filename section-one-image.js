// documentation:
// https://github.com/kittykatattack/learningPixi/blob/master/examples/09_movingSprites.html
// https://github.com/kittykatattack/learningPixi#sizenscale
// http://pixijs.github.io/examples/#/basics/basic.js
var renderer = PIXI.autoDetectRenderer(950, 350, { transparent: true });
document.getElementById('section-one-animation').appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();
    renderer.backgroundColor = 0xffffff;

var count = 0;
// build a rope!
var ropeLength = 14000 / 190;

var points = [];

for (var i = 0; i < 20; i++)
{
    points.push(new PIXI.Point(i * ropeLength, 0));
}


var face = PIXI.Sprite.fromImage('section-one-face-image.jpg');
face.position.x = 180;
face.position.y = -500;
// making the snake container
var sectionContainer = new PIXI.Container();
    sectionContainer.position.x = 110;
    sectionContainer.position.y =  220;

sectionContainer.scale.set(400 / 700);
stage.addChild(sectionContainer);
sectionContainer.addChild(face);

// start animating
requestAnimationFrame(animate);

function animate() {
    renderer.render(stage);
    requestAnimationFrame(animate);
}

// var sprite = PIXI.Sprite.fromImage('section-one-face-image.jpg');
// sprite.position.x = 100;
// sprite.position.y = 100;
// stage.addChild(sprite);

var rect = new PIXI.Graphics();
rect.beginFill(0x00FA9A, 1);
rect.drawRect(110, 290, 230, 100); // x, y, width, height
rect.endFill();

//second green rectangle
var rect2 = new PIXI.Graphics();
rect2.beginFill(0x00FA9A, 1);
rect2.drawRect((renderer.width - 390),(renderer.height - 60), 230, 100);

stage.addChild(rect2);
stage.addChild(rect);

var graphics = new PIXI.Graphics()
graphics.lineStyle(0);
graphics.beginFill(0xff0000, 0.8);
// rect.drawRect(-100, 20, 30, 10); // x, y, width, height
graphics.drawCircle(50, 300, 35, 30);
graphics.endFill();
stage.addChild(graphics);

var circle2 = new PIXI.Graphics()
circle2.lineStyle(2);
circle2.beginFill(0xff0000, 0.8);
circle2.drawCircle(870, 300, 35, 30);
circle2.endFill();

stage.addChild(circle2);
// add stage to the canvas

render();
  
function render(){
    renderer.render(stage);
}



