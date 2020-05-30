
import React from 'react';
import { Link } from 'react-router-dom';

class AboutComponent extends React.Component {
  render() {
  	return (
        <section className="section bg-light" id="features">
        <div className="container">
            <div className="row vertical-content">
                <div className="col-lg-12">
                    <div className="features-box">
                        <h3>Who we are</h3>
                        <p className=" web-desc">IvyNet, Inc.,  is a company who provides innovative solutions to improve operational efficiencies for companies in providing a better life for consumers. Historically, there is a very large gap when a person passes, because it is dependent on the next of kin’s knowledge and experience with what steps must occur when a person passes.  IvyNet’s proprietary software solves this problem by closing that gap.</p>
                        <p className=" web-desc">We have developed the complete solution first to help families get organized, providing a digital back up location for important documents in an easy to use digital suite of lockers.  Each designed to hold functional pieces of information so that the family will have everything thing they need to move forward. IvyLocker is that tool and gives the living subscriber a robust set of controls to manage their account, with who has access to see what, or not see until the Lockers are unlocked.</p>
                        <p className=" web-desc">We also realize the unique disadvantage insurance and pension companies along with financial institutions sit in, in not knowing when someone passes away.  So, we have patented the first ever rules based engine for electronically transmitting post-mortem information to a network of providers who require this information to provides its services to its customer base.  This is executed by a point to point secure transmission using IvyNet’s technology, the Integrated Vital Information Exchange, aka ‘I.V.I.E.Hub™.</p>
                        <p className=" web-desc">Our nation is in need of an improved infrastructure, one which will support the country for future generations. IvyNet’s software as service model provides innovative technology which saves each partner in the network ‘revenue’, while increasing sales, improving customer loyalty, and operational efficiencies; while saving tax payer dollars as the unclaimed assets accrued by each state government begins to decline.  Additionally, companies who become partners have the unique position of being on the forefront of defining rules surrounding this new infrastructure.  Be a part of this ground breaking technological position today.  The future is here! </p>
                        
                    </div>
                </div>
                {/* <div className="col-lg-7">
                    <div className="features-img features-right text-right">
                        <img src="images/online-world.svg" alt="macbook image" className="img-fluid" />
                    </div>
                </div> */}
            </div>
        </div>
    </section>
  	);
  }
}
export default AboutComponent;