var React = require('react');
var Video = require('./Video');

var Sections = React.createClass({

    render: function() {
        return (
            <div className="row">
                <div className="section-container section-container__container"> 
                    
                    <section className="content__row active">
                          <div className="row fullWidth">
                              <div className="large-12 columns text-center">
                                  <div className="section-container__branding">
                                    <p>Content hello hello.</p>
                                  </div>
                            </div>
                         </div>
                    </section>

                    <div className="row">
                      <div className="small-2 large-4 columns">
                            <div className="large-12 columns text-center">
                                <div className="section-container__branding">
                                <p>Content of section 4.</p>
                            </div>
                      </div>
                     </div>

                      <div className="small-2 large-4 columns">
                        <div className="large-12 columns text-center">
                            <div className="section-container__branding">
                              <p>Content of section 5.</p>
                            </div>
                        </div>
                     </div>
                     
                      <div className="small-2 large-4 columns">
                          <div className="large-12 columns text-center">
                              <div className="section-container__branding">
                                <p>Content of section 6.</p>
                              </div>
                        </div>
                         <p>Content of section 6.</p>
                     </div>
                  </div>

                  <section className="content__row active">
                        <div className="row fullWidth">
                            <div className="large-12 columns text-center">
                              <Video /> 
                          </div>
                       </div>
                  </section>
                </div>
            </div>
        );
    },
});

module.exports = Sections;


