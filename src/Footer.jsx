var React = require('react');
var Anime = require('anime');
var AnimateFooter = require('./AnimateFooter');

var Footer = React.createClass({

    render: function() {
        return (
            <footer className="footer">
                <div className="footer__container section-container">
                     <div className="footer__logo"></div>
                    <AnimateFooter />  

                    <div id="lineDrawing" className="icon icon--juliet-logo" ref={function(section) {
                        self.section = section;
                    }}>
                    </div>

                    <i className="icon icon--footer-logo" />
                    <div className="icon icon--footer-email"></div>
                    <div className="icon icon--facebook"></div>
                    <div className="icon icon--twitter"></div>
                    <div className="footer__text">JULIET BROWN 2017 ©<span className="red-dot">.</span></div>
                </div>  
            </footer>
        );
    },

    componentDidMount: function() {
        this.animate();
    },

    animate: function() {


    var lineDrawing = anime({
        targets: '#lineDrawing .lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
    });
     
    }
});

module.exports = Footer;