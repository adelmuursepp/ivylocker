import React from 'react';

class IvyPartner extends React.Component {
  render() {
  	return (
        <section className="section bg-light pt-4" id="network">
            <div className="container">
                <div className="row vertical-content">
                    <div className="col-lg-12">
                        <div className="features-box mt-4">
                            <h1>Ivy Partner Network</h1>
                            <br/>
                            <p className=" web-desc">The Ivy Partner Network is an exclusive network of companies who provide services to the public at large.  What qualifies a company to be eligible for the network is whether as part of their normal business processes are aligned to a  need to know when an individual passes.  Any organization who requires a death certificate to end or begin their services for an individual.  For example at minimum the following organizations can substantially improve their operational efficiencies by receiving an approved notification of death from our proprietary notification services:</p>
                            <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                                <li className="">Life Insurers</li>
                                <li className="">Credit Bureaus</li>
                                <li className="">Credit Card Processors</li>
                                <li className="">Credit Card Providers</li>
                                <li className="">Pension Provider</li>
                                <li className="">Attorneys</li>
                                <li className="">Estate Planners Wealth and Retirement Management</li>
                            </ul>
                            <br/>
                            <p className=" web-desc">Typically today, providers are contacted by a family member informing them of the death of someone who has done business with the provider.  This is an aspect of handling the affairs or estate of the loved one.  As part of the normal processing in most businesses, information must be provided, such as account information, address, social security information and a certified certificate of death to either close accounts, or pay benefits.</p>
                            <br/>
                            <h1>Why partner with IvyNet, providers of IvyLocker?</h1>
                            <br/>
                            <p className=" web-desc">IvyLocker is driven by a proprietary rules engine, the Integrated Vital Information Exchange, (I.V.I.E.Hub), which is a centralized hub for post-mortem information.  Our value added services to the IvyPartner Network is the flexibility to receive an electronic transmission of data for their customers, with return receipt handling. </p>
                            <p className=" web-desc">This unique service is not available through any other commercial source.  </p>
                            <p className=" web-desc">Additionally, Partners who join the license network will contribute to technological advances in innovative standards surrounding this unique but needed business function.</p>
                            <p className=" web-desc">This process also provides assurance to customers of any Ivy Partner Network provider that their families will not miss out on benefits or become victims of identity theft.</p>
                            <br/>
                            <p className=" web-desc">Here’s a snapshot of how this service will benefit your company:</p>
                            <p className=" web-desc">IvyLocker® following the wishes of the subscriber will extract and execute notifications to the providers shown above.  Each locker above represents subscribers.   </p>
                            <p className=" web-desc">Now, because of IvyNet’s proprietary system, business and families have greater control. </p>
                            <br/>
                            <h3 className=" web-desc">Our value to Partners: </h3>
                            <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                                <li className="">Reduce your operational costs.  70M+ baby boomers will impact your organization</li>
                                <li className="">Improve and regain lost public trust in your services to them – send the message that you want to help families not just take their money</li>
                                <li className="">Reduce the impact of fraud and identity theft to your bottom line</li>
                            </ul>
                            <br/>
                            <h3 className=" web-desc">Our value to millions of families:   </h3>
                            <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                                <li className="">Shut down the credit – eliminating access use of social security numbers by fraud perpetrators. </li>
                                <li className="">No more premiums paid for none thing – in the end the family never collecting because they didn’t know.</li>
                                <li className="">Providing families with greater control over their affairs</li>
                            </ul>
                            <p className=" web-desc">Contact us <Link to={"mailto:" + "support@ivylocker.com"}>TODAY</a> to discuss becoming a partner of this valuable network!  </Link>

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
export default IvyPartner;