import React from 'react';
import { Link } from 'react-router-dom';

class ProductsComponentIntro extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id="products">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
  
                        {/* <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p> */}
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-3 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <Link to="/ivylocker">
                            <i className="pe-7s-diamond text-custom"></i>
                            <h4 className="padding-t-15">IvyLocker®</h4></Link>
                            <p className="padding-t-15 text-muted">A suite of digital lockers for pre-planning your estate and more </p>                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <Link to="/ivypartner">
                            <i className="pe-7s-expand1 text-custom"></i>
                            <h4 className="padding-t-15">IvyPartner</h4>
                            </Link>
                            <p className="padding-t-15 text-muted">Vital records shared to a Licensed Network through the Integrated Vital Information Exchange Hub (I.V.I.E.Hub™), more</p>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <Link to="/products">   
                            <i className="pe-7s-shield text-custom"></i>
                            <h4 className="padding-t-15">IvyProtect</h4>
                            </Link>
                            <p className="padding-t-15 text-muted">Credit Protection for Commercial Business</p>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <Link to="/products">
                            <i className="pe-7s-phone text-custom"></i>
                            <h4 className="padding-t-15">IvyWish</h4>
                            </Link>
                            <p className="padding-t-15 text-muted">Our mobile app providing video journaling and more</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default ProductsComponentIntro;