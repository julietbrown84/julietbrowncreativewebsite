var React = require('react');
var AnimateFooter = require('./AnimateFooter');

var Footer = React.createClass({

    render: function() {
        return (
            <footer className="footer">
                <div className="footer__container section-container">
                     <div className="footer__logo"></div>
                    <AnimateFooter />  
                    <i className="icon icon--footer-logo" />
                    <div className="icon icon--footer-email"></div>
                    <div className="icon icon--facebook"></div>
                    <div className="icon icon--twitter"></div>
                    <div className="footer__text">JULIET BROWN 2017 ©<span className="red-dot">.</span></div>
                </div>  
            </footer>
        );
    },
});

module.exports = Footer;