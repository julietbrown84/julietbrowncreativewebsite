var React = require('react');

var Footer = React.createClass({

    render: function() {
        return (
            // </AnimateFooter />
            <footer className="footer__container section-container">
                 <div className="footer__logo">
                    <i className="icon icon--hamburger"></i>
                        <div className="footer__logo-text">© 2016 JULIET BROWN </div>
                </div>
            </footer >
        );
    },
});

module.exports = Footer;