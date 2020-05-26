import React from 'react';
import { Link } from 'react-router-dom';

class ProductsComponentIntro extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id="products">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">Products</h1>
                        <div className="section-title-border margin-t-20"></div>
                        {/* <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p> */}
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-3 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <a href="/products">
                            <i className="pe-7s-diamond text-custom"></i>
                            <h4 className="padding-t-15">IvyLocker®</h4></a>
                            <p className="padding-t-15 text-muted">A suite of digital lockers for pre-planning all of your affairs, to documents, your memorial plans and with easy controls giving you control of your life after death </p>                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <a href="/products">
                            <i className="pe-7s-expand1 text-custom"></i>
                            <h4 className="padding-t-15">IvyPartner</h4>
                            </a>
                            <p className="padding-t-15 text-muted">Vital records shared to a Licensed Network on the Framework of the Integrated Vital  Information Exchange Hub, (I.V.I.E.Hub™)</p>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <a href="/products">   
                            <i className="pe-7s-shield text-custom"></i>
                            <h4 className="padding-t-15">IvyProtect</h4>
                            </a>
                            <p className="padding-t-15 text-muted">Credit Protection for Commercial Business lowering risk and loss caused by accounts remaining open indefinitely after death</p>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <a href="/products">
                            <i className="pe-7s-phone text-custom"></i>
                            <h4 className="padding-t-15">IvyWish</h4>
                            </a>
                            <p className="padding-t-15 text-muted">Our mobile app providing video journaling, audio, text to a contact(s) in IvyLocker®</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default ProductsComponentIntro;