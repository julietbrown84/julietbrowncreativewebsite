var React = require('react');
var AnimateCanvas = require('./AnimateCanvas');

var Slider = React.createClass({

    render: function() {
        return (
			<div className="section-container section-container__container auto">
				<section className="active content__row">
					<AnimateCanvas /> 
					<div className="section-container__first-animation-section"></div>
				</section>
				<div className="icon icon--arrow-down-grey"></div>
			</div>
        );
    },
});

module.exports = Slider;