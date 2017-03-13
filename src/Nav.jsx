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
                    "main-navigation__icon icon icon--close " : " main-navigation__icon icon icon icon--hamburger"}, null),
                    this.state.active ? this.renderMenu() : null
                  )
                )
              )
            )
	},

  // const element = <item="item 1" />;
  // note put 'props' in prameters when try to d it again
	renderMenu: function() {

    return (
			React.createElement("ul", {className:"main-navigation__list"}, null, 
			 // React.createElement("li", null, {props.item}),
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

