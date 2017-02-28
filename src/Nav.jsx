var React = require('react');

var Nav = React.createClass({

	getInitialState: function() {
		return {
		  active: false
		}
	  },

	handleClick: function() {
		this.setState({
			active: !this.state.active
		});
	},
  
	render : function() {
		return (
			<div>
				<button 
					onClick={this.handleClick} 
					style={{backgroundColor:this.state.active ? "red" : "blue"}}>Button
				</button>
				{this.state.active ? this.renderMenu() : null}
			</div>
		)
	},

	renderMenu: function() {
		return (
			<ul>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ul>
		);
	}

});
module.exports = Nav;

