import React from 'react';
import { Link } from 'react-router-dom';

class SocialMedia extends React.Component {
  render() {
  	return (
        <section className="cta bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="list-inline social margin-t-20">
                            <li className="list-inline-item"> <Link to="http://facebook.com/ivylocker" className="social-icon"><i className="mdi mdi-facebook"></i></Link></li>
                            <li className="list-inline-item"> <Link to="http://www.twitter.com/ivychief" className="social-icon"><i className="mdi mdi-twitter"></i></Link></li>
                            <li className="list-inline-item"> <Link to="http://www.instagram.com/ivylocker" className="social-icon"><i className="mdi mdi-instagram"></i></Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 margin-t-30 text-right"></div>
                    <div className="col-lg-3 margin-t-30 text-right">
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default SocialMedia;