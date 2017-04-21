var React = require('react');
var Pixi = require('pixi');

var AnimateFooter = React.createClass({

    render: function() {
    	var self = this;

        return (
        	<div id="worm" ref={function(section) {
				self.section = section;
			}}>
			</div>
        );
    },

  	componentDidMount: function() {
		this.animate();
	},

    animate: function() {

		var renderer = PIXI.autoDetectRenderer(1000, 180);
		this.section.appendChild(renderer.view);
		 
		// create the root of the scene graph
		var stage = new PIXI.Container();
	    renderer.backgroundColor = 0xffffff;

		var count = 0;

		// build a rope!
		var ropeLength = 2800 / 13;

		var points = [];

		for (var i = 0; i < 20; i++)
		{
		    points.push(new PIXI.Point(i * ropeLength, 0));
		}

		var snakeTwo = new PIXI.mesh.Rope(PIXI.Texture.fromImage('image/snake-one.png'), points);
		var snakeOne = new PIXI.mesh.Rope(PIXI.Texture.fromImage('image/snake-two.png'), points);
		var snakeThree = new PIXI.mesh.Rope(PIXI.Texture.fromImage('image/cat.png'), points);

		function snakeOne() {}

		
		// snakes
		snakeOne.x = -59;

		snakeTwo.x = 559;
		snakeTwo.y = 9000;
		snakeTwo.position.set(204, 134);
		snakeTwo.height = 520;
		snakeTwo.width = 3000;

		// snakeThree.x = 559;
		// snakeThree.y = 6009;
		// snakeThree.height = 200;
		// snakeThree.width = 300;

		// making the snake container
		var snakeContainer = new PIXI.Container();
		    snakeContainer.position.x = 50;
		    snakeContainer.position.y = 100;

		snakeContainer.scale.set(1000 / 4500);
		stage.addChild(snakeContainer);

		// add the snakes to the container
		snakeContainer.addChild(snakeOne);
		snakeContainer.addChild(snakeTwo);
		// snakeContainer.addChild(snakeThree);

		// start animating
		requestAnimationFrame(animate);

		function animate() {

		    count += 0.1;

		    // make the snake
		    for (var i = 0; i < points.length; i++) {

		        points[i].y = Math.sin((i * 0.5) + count) * 1;
		        points[i].x = i * ropeLength + Math.cos((i * 0.3) + count) * 10;
		    }

		    // render the stage
		    renderer.render(stage);
		    requestAnimationFrame(animate);
		}


	}
});

module.exports = AnimateFooter;

