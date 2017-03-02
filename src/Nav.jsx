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
          React.createElement("div", {className:"header__container"},
            React.createElement("div", {className:"main-navigation container"},
              React.createElement("div", {className:"main-navigation container"},
                  React.createElement("i", {
                    onClick: this.handleClick,
                    className:this.state.active ? 
                    "main-navigation__icon icon icon--hamburger" : " main-navigation__iconicon icon--close"}, null),
                    this.state.active ? this.renderMenu() : null
                  )
                )
              )
            )
	},

	renderMenu: function() {
		return (
			React.createElement("ul", {className:"main-navigation__list"}, null, 
				React.createElement("li", null, "Item 1"), 
				React.createElement("li", null, "Item 2"), 
				React.createElement("li", null, "Item 3"),
        React.createElement("li", null, "Item 4"), 
        React.createElement("li", null, "Item 5"), 
        React.createElement("li", null, "Item 6")
			)
		);
	}

});
module.exports = Nav;
