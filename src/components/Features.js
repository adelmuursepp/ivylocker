import React from 'react';
import { Link } from 'react-router-dom';

class Features extends React.Component {
  render() {
  	return (
        <section className="section bg-light" id="features">
        <div className="container">
            <div className="row vertical-content">
                <div className="col-lg-5">
                    <div className="features-box">
                        <h3>Features</h3>
                        <p className="text-muted web-desc">Our members and partners benefit from our patented I.V.I.E.Hub™ (Integrated Vital Information Exchange) Hub.  I.V.I.E.Hub™ facilitates digital transmission of voice, data, and images and powers the engine of Ivylocker® and provides a host of options for connecting to us if you are a company we classify as a partner; please check out the Ivy Partner Network to find out more.  With IvyLocker®, you have the ability to share those things that matter most.</p>
                        <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                            <li className="">We put a lot of effort in design.</li>
                            <li className="">The most important ingredient of successful website.</li>
                            <li className="">Sed ut perspiciatis unde omnis iste natus error sit.</li>
                            <li className="">Submit Your Orgnization.</li>
                        </ul>
                        <Link to="JavaScript:Void(0);" className="btn btn-custom margin-t-30 waves-effect waves-light">Learn More <i className="mdi mdi-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="features-img features-right text-right">
                        <img src="images/online-world.svg" alt="macbook image" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  	);
  }
}
export default Features;