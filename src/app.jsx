var React = require('react');
var ReactDom = require('react-dom');
var Nav = require('./Nav');
// var AnimateNav = require('./AnimateNav');
var Slider = require('./Slider');
var AnimateCanvas = require('./AnimateCanvas');
var Sections = require('./Sections');
var Footer = require('./Footer');

var App = React.createClass({ 
	render: function () {
		var list = [
			{
				title: 'Menu item 1',
				link: 'https://google.co.nz/'
			},
			{
				title: 'Menu item 2',
				link: 'https://google.co.nz/'
			},
			{
				title: 'Menu item 3',
				link: 'https://google.co.nz/'
			},
			{
				title: 'Menu item 4',
				link: 'https://google.co.nz/'
			},
			{
				title: 'Menu item 5',
				link: 'https://google.co.nz/'
			}
		];

		return (
			<div className="app">
				console.log('outpyt');

				<Nav items={list} />

				<div className="row">
					<div className="section-container section-container__container auto">
					 	<section className="active content__row">
					 	   <div className="row fullWidth">
					 	   		<div className="large-12 columns text-center">
					 				<Slider />
					 			</div>
					 		</div>
					 	</section>

					 </div>
				</div>

				<Sections />

				<Footer />
			</div>
		);
	}
});

ReactDom.render(<App />, document.getElementById('app'));