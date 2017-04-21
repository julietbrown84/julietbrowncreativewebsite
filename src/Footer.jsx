var React = require('react');
var AnimateFooter = require('./AnimateFooter');

var Footer = React.createClass({

    render: function() {
        return (
            <footer className="footer__container section-container">
                <AnimateFooter />
                 <div className="footer__logo">
                    <i className="icon icon--hamburger"></i>
                    <div className="footer__logo-text"> © 2017 JULIET BROWN </div>
                </div>
            </footer >  
        );
    },
});

module.exports = Footer;