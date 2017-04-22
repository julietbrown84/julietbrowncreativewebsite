var React = require('react');
var AnimateFooter = require('./AnimateFooter');

var Footer = React.createClass({

    render: function() {
        return (
            <footer className="footer__container section-container">
                 <div className="footer__logo">
                       <AnimateFooter />
                    <div className="footer__logo-text"> © 2017 JULIET BROWN <span> TO DO . reddot</span></div>
                </div>
            </footer >  
        );
    },
});

module.exports = Footer;