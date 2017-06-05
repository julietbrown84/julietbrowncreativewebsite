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
					<i className="icon icon--logo" />
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
					<div className="main-navigation__top">
						<div className="row">
                            <div  className="main-navigation__text large-3 columns text-center">
                 				<p> test teststsskdtksjh</p>
                            </div>

                            <div  className="main-navigation__text large-3 columns text-center">
                 				<p> test</p>
                            </div>
                          <div className="large-5 columns text-center">
	                          	<div className="main-navigation__text-three">
	                 				<p>julietbrown84@gmail.com</p>	
	                          	</div>
	                          	<div className="main-navigation__left-right-icons row">
                         			<div className="icon icon--nav-logo"></div>
                          			<div className="icon icon--email"></div>
	                 				<div className="icon icon--facebook"></div>
	                 				<div className="icon icon--twitter"></div>
	                 			</div>
	                 		</div>
                       </div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Nav;
