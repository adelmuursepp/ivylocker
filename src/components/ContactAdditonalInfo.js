import React from 'react';
import { Link } from 'react-router-dom';

class ContactAdditionalInfo extends React.Component {
  render() {
  	return (
        <section className="cta bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 margin-t-30">
                    <p className="contact-title">Office Address:</p>
                    <p className="contact-title">3126 Valley Falls St. Elgin, IL 60124</p>
            
                    </div>
                    <div className="col-lg-3 margin-t-30">
                    <p className="contact-title">Office Hours:</p>
                    <p className="contact-title">Tuesday-Friday   3pm – 8pm cst.</p>
                    <p className="contact-title">Saturday  10:00 am -  1pm cst.</p>

                    </div>
                    <div className="col-lg-3 margin-t-30 text-right">
                    <p className="contact-title">1-888-774-4894</p>

                    </div>
                    <div className="col-lg-3 margin-t-30 text-right">
                    <p className="contact-title"><i className="pe-7s-mail-open"></i>&nbsp; support@ivylocker.com</p>
                    </div>
                    
                </div>
            </div>
        </section>
  	);
  }
}
export default ContactAdditionalInfo;

