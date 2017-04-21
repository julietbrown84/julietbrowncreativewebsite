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
				<div className="main-navigation__nav-box-list-left">
					<ul className="main-navigation__list main-navigation__nav-box-list-left">
						{
							this.props.items.map(function(item) {
								return (
									<li><a href={item.link}>{item.title}</a></li>
								);
							})
						}
					</ul>
				</div>
				
				<div className="main-navigation__nav-box-right">
					
				</div>
			</div>
		);
	}
});

module.exports = Nav;
