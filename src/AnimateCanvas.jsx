var React = require('react');
var Pixi = require('pixi');

var AnimateCanvas = React.createClass({

	render: function() {
		var self = this;
		
		return (
			<div id="section-one-animation" ref={function(section) {
				self.section = section;
			}}>
			</div>
		);
	},

	componentDidMount: function() {
		this.animate();
	},

	animate: function() {

		var renderer = PIXI.autoDetectRenderer(950, 350, { transparent: true });
		this.section.appendChild(renderer.view);

		function createScene() {
			// create the root of the scene graph


			var stage = new PIXI.Container();
		    renderer.backgroundColor = 0xffffff;

			var sectionContainer = new PIXI.Container();
			sectionContainer.position.x = 110;
			sectionContainer.position.y =  220;
			sectionContainer.scale.set(400 / 700);
			
			stage.addChild(sectionContainer);
	
			function face() {
				var face = PIXI.Sprite.fromImage('image/section-one-face-image.jpg');
				face.position.x = 180;
				face.position.y = -500;

				sectionContainer.addChild(face);
			}

			requestAnimationFrame(animate);

			function animate() {
			    renderer.render(stage);
			    requestAnimationFrame(animate);
			}

			function rectangleTwo() {
				var rect = new PIXI.Graphics();
				rect.beginFill(0x00FA9A, 1);
				rect.drawRect(110, 290, 230, 100); // x, y, width, height
				
				rect.endFill();
				stage.addChild(rect);
			};

			function rectangleOne() {
				var rect2 = new PIXI.Graphics();
				rect2.beginFill(0x00FA9A, 1);
				rect2.drawRect((renderer.width - 390),(renderer.height - 60), 230, 100);

				rect2.endFill();
				stage.addChild(rect2);
			};

			// TO DO: work out why itwon't work dynamic
			// function drawRectangle(width, height, x, y) {
			// 	console.log(width, height, x, y);
			// 	var r = new Pixi.Graphics();

			// 	r.beginFill(0x00FA9A, 1);
			// 	r.drawRect(width, height, x, y);
			// 	r.endFill();
			// 	// 	console.log(r);
			// 	// stage.addChild(r);
			// };

			function outlineCircle() {
				var graphics = new PIXI.Graphics()
				graphics.lineStyle(0);
				graphics.beginFill(0xff0000, 0.8);
				graphics.drawCircle(50, 300, 35, 30);

				graphics.endFill();
				stage.addChild(graphics);
			};
			
			function drawCircle() {
				var circle2 = new PIXI.Graphics()
				circle2.lineStyle(2);
				circle2.beginFill(0xff0000, 0.8);
				circle2.drawCircle(870, 300, 35, 30);

				circle2.endFill();
				stage.addChild(circle2);
			};

			rectangleOne();
			rectangleTwo();
			face();
			
			// TO DO: work out why itwon't work dynamic
			// drawRectangle(110, 290, 230, 100);
			// drawRectangle((renderer.width - 390),(renderer.height - 60), 230, 100);
			outlineCircle();
			drawCircle();
			render();
			  
			function render(){
			    renderer.render(stage);
			}
		}

		createScene();
	}
});

module.exports = AnimateCanvas;
