import React from 'react';
import { Link } from "react-dom";
class ServicesComponent extends React.Component {
  render() {
  	return (
        <section className="section bg-light" id="services">
            <div className="container">
                <div className="row vertical-content">
                    <div className="col-lg-12">
                        <div className="features-box pb-4 mb-4">
                            <h1 className="pb-4">Services</h1>
                            <p className=" web-desc">Our software as a service model enables every partner to benefit from the latest technological features without the disruption associated with software updates and upgrades.  Although each partner has their own systems, business rules and more, we can connect through our robust set of API’s, enabling your network to receive this valuable data, and innovate your internal processes for greater efficiencies. </p>
                            <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                                <li className="">Consultation</li>
                                <li className="">Program admin</li>
                                <li className="">Customer/tech support</li>
                            </ul>
                            {/* <Link to="JavaScript:Void(0);" className="btn btn-custom margin-t-30 waves-effect waves-light">Learn More <i className="mdi mdi-arrow-right"></i></Link> */}
                        </div>
                        <div className="features-box mt-4 pb-4 mb-4 pt-4" id="consulting">
                            <h3>Our consulting</h3>
                            <p className=" web-desc">At IvyNet, we listen to your needs.  We ask good questions.  We understand that at the very core of your business challenges lie processes which may need to be fine-tuned.  Through careful analysis and assessment we provide professional solutions that successfully leverage technology to achieve your objectives.  Then our products and services strategically integrated to deliver the solutions and exceed your expectations.   </p>
                            <p className=" web-desc">Our consultative services provide for an evaluation of your existing infrastructure and processes, followed by recommendations on how IvyNet’s  suite of products may be implemented and utilized by your organization.  At the conclusion of IvyNet’s  our recommendation report will provide the following:  </p>
                            <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                                <li className="">Program and solution design</li>
                                <li className="">Business rules development</li>
                                <li className="">Break-even analysis</li>
                                <li className="">Return on investment</li>
                                <li className="">Qualitative/ Quantitative research</li>
                                <li className="">Graphical reporting/analysis</li>
                            </ul>
                            {/* <Link to="JavaScript:Void(0);" className="btn btn-custom margin-t-30 waves-effect waves-light">Learn More <i className="mdi mdi-arrow-right"></i></Link> */}
                        </div>
                        <div className="features-box mt-4 pb-4 mb-4 pt-4">
                            <h3>Program administration</h3>
                            <p className=" web-desc">For any organization, one of the most time consuming aspects of Information Technology programs is administration.  IvyNet offers a range of stream-lined, cost-efficient administrative services to assure easy implementation and successful results from set-up to evaluation.</p>
                            <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                                <li className="">Technology set-up and customizationsn</li>
                                <li className="">Program Set-up</li>
                                <li className="">Performance and scoring algorithms</li>
                                <li className="">Database management</li>
                                <li className="">Reporting</li>
                                <li className="">Program and Budget Management</li>
                                <li className="">Measurement and Analysis</li>
                                <li className="">Post program testing</li>
                            </ul>

                            
                            {/* <Link to="JavaScript:Void(0);" className="btn btn-custom margin-t-30 waves-effect waves-light">Learn More <i className="mdi mdi-arrow-right"></i></Link> */}
                        </div>
                        <div className="features-box mt-4 mb-4 pt-4">
                            <h3>Customer/Technical support</h3>
                            <p className=" web-desc">Critical to the success of any software as a service provider is their ability to provide high quality customer and technical support.  </p>
                            <p className=" web-desc">CALL US   888-774-4894 </p>
                            

                            
                            {/* <Link to="JavaScript:Void(0);" className="btn btn-custom margin-t-30 waves-effect waves-light">Learn More <i className="mdi mdi-arrow-right"></i></Link> */}
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
export default ServicesComponent;