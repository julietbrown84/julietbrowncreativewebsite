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

		var renderer = PIXI.autoDetectRenderer(1400, 60);
		this.section.appendChild(renderer.view);
		 
		// create the root of the scene graph
		var stage = new PIXI.Container();
	    renderer.backgroundColor = 0xffffff;

		function logo() {
			var logo = PIXI.Sprite.fromImage('image/section-one-face-image.jpg');
			logo.position.x = 30;
			logo.position.y = -400;
			logo.scale.set(30 / 30);
			tenticleContainer.addChild(logo);
		}

		// TO DO: refactor

		var count = 0;
		// build a rope!
		var ropeLength = 2800 / 13;
		var points = [];
		for (var i = 0; i < 20; i++){
		    points.push(new PIXI.Point(i * ropeLength, 0));
		}

		var tenticle = new PIXI.mesh.Rope(PIXI.Texture.fromImage('image/snake-one.png'), points);
		var tenticleOne = new PIXI.mesh.Rope(PIXI.Texture.fromImage('icon/hamburger.svg'), points);

		function tenticleOne() {}

		// tenticles
		tenticleOne.x = -59;

		tenticle.x = 59;
		tenticle.x = 159;
		tenticle.y = 9000;
		tenticle.position.set(304, 134);
		tenticle.height = 520;
		tenticle.width = 3000;

		// making the snake container
		var tenticleContainer = new PIXI.Container();
		    tenticleContainer.position.x = 20;
		    tenticleContainer.position.y = 10;

		tenticleContainer.scale.set(1900 / 6500);
		stage.addChild(tenticleContainer);

		// add the snakes to the container
		tenticleContainer.addChild(tenticleOne);
		tenticleContainer.addChild(tenticle);
		// tenticleContainer.addChild(snakeThree);

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

		logo();
	}
});

module.exports = AnimateFooter;

