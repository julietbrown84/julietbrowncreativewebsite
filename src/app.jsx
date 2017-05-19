var React = require('react');
var ReactDom = require('react-dom');
var Nav = require('./Nav');
var Slider = require('./Slider');
var Sections = require('./Sections');
var Footer = require('./Footer');

var App = React.createClass({ 
	render: function () {
		var list = [
			{
				title: 'About',
				link: 'https://google.co.nz/'
			},
			{
				title: 'Contact',
				link: 'https://google.co.nz/'
			},
			{
				title: 'Web work',
				link: 'https://google.co.nz/'
			},
			{
				title: 'Artwork',
				link: 'https://google.co.nz/'
			},
			{
				title: 'Blog',
				link: 'https://google.co.nz/'
			}
		];

		return (
			<div className="app">
				<Nav items={list} />
				<Slider />
				<Sections />
				<Footer />
			</div>
		);
	}
});

ReactDom.render(<App />, document.getElementById('app'));