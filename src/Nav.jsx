var React = require('react');

var Nav = React.createClass({

	getInitialState: function() {
		return {
		  active: false
		}
	},

	handleClick: function() {
		var self = this;

		this.setState({
			active: !this.state.active
		},
		function() {
			console.log('left side and right side');
			this.refs.leftside.classList.toggle('active');
			this.refs.rightside.classList.toggle('active');
		});
		setTimeout(function() {
	    	self.refs.leftside.classList.toggle('active');
	        setTimeout(function() {
		    	self.refs.rightside.classList.toggle('active');
		    }, 900);
	    }, 200); 
	},

	render: function() {
		var classes = this.state.active ? "main-navigation__icon icon icon--close" : "main-navigation__icon icon icon icon--hamburger";

		return (
			<div className="header__container">
				<div className="main-navigation container">
					<i onClick={this.handleClick} className={classes} />
					{this.state.active ? this.renderMenu() : null}
				</div>
			</div>
		);
	},

	renderMenu: function() {
		return (
			<div className="main-navigation">
				<div className="main-navigation__nav-box-list-left" ref="close" ref="leftside">
					<ul className="main-navigation__list">
						{
							this.props.items.map(function(item) {
								return (
									<li><a href={item.link}>{item.title}</a></li>
								);
							})
						}
					</ul>
				</div>
				
				<div className="main-navigation__nav-box-right" ref="rightside">
					
				</div>
			</div>
		);
	}
});

module.exports = Nav;
