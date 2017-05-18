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
			},
			{
				title: 'Menu item 6',
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