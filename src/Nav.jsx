var React = require('react');

var Nav = React.createClass({displayName: "Nav",

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
		React.createElement("div", {className:"main-navigation container"},
          React.createElement("icon", {onClick: this.handleClick,className:this.state.active ? "icon icon--hamburger" : "icon icon--close"}, "icon"),
  				React.createElement("button", {
  					onClick: this.handleClick, 
  					style: {backgroundColor:this.state.active ? "yellow" : "blue"}}, "Button"
  				), 
				this.state.active ? this.renderMenu() : null
			)
		)
	},

	renderMenu: function() {
		return (
			React.createElement("ul", null, 
				React.createElement("li", null, "Item 1"), 
				React.createElement("li", null, "Item 2"), 
				React.createElement("li", null, "Item 3")
			)
		);
	}

});
module.exports = Nav;