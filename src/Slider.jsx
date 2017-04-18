var React = require('react');
var AnimateCanvas = require('./AnimateCanvas');

var Slider = React.createClass({

	render: function() {
		// var self = this;
		return (
			<AnimateCanvas />
			// <div id="section-one-animation" ref={function(section) {
			// 	self.section = section;
			// }}>
			// </div>
		);
	},

	componentDidMount: function() {
		// this.animate();
	},

	animate: function() {
		
	}
});

module.exports = Slider;
