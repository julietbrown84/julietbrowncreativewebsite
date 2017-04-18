var React = require('react');

var Sections = React.createClass({

	render: function() {
		// var self = this;
		return (
			// <div id="section-one-animation" ref={function(section) {
			// 	self.section = section;
			// }}>
			// </div>
			console.log('hi');
			
			<section className="content__row active">
        		<p className="title" data-section-title>
        			<a href="#panel2">Section 2</a>
        		</p>
        		
        		<div className="content" data-section-content>
            		<p>Content of section 2.</p>
       			 </div>
        	</section>

	        <section className="content__row active">
	            <div className="row fullWidth">
	                <div className="large-12 columns text-center"> -->
	                    <div className="section-container__branding" >
	                    	<p>Content of section 3.</p>
	                   </div>
	                </div>
	            </div>
	        </section>

	        <div className="row">
	            <div className="small-2 large-4 columns">... </div>
	            <div className="small-4 large-4 columns">...</div>
	            <div className="small-6 large-4 columns">...</div>
	        </div>
		);
	},
});

module.exports = Sections;
