import React from 'react';
import Navbar from './components/Navbar';
import NavbarNoTransition from './components/NavbarNoTransition';
import ContactForm from './components/ContactForm';
import ContactAdditonalInfo from './components/ContactAdditonalInfo';
import EmailForm from './components/EmailForm';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import FooterLinks from './components/FooterLinks';
import Switcher from './components/Switcher';
import { Link } from 'react-router-dom';
import Aux from './hoc/Aux_';

class ContactUs extends React.Component {
  render() {

  	return (
        <Aux>
                {/* Navbar Component*/}
                <NavbarNoTransition />

                {/* <section className="section bg-home height-100vh" id="home">
                    <div className="bg-overlay"></div>
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-white text-center">
                                        <h1 className="home-title">Solutions</h1>
                                        <h1 className="home-title">Our passion for those who matter the most</h1>
                                        <h1 className="home-title">IvyNet – Connecting People</h1>
                                        <p className="padding-t-15 home-desc">Executing your wishes after death by electronically notifying those you elect and identify within your Ivylocker® account.</p>
                                        <p className="play-shadow margin-t-30 margin-l-r-auto"> <Link to="https://www.youtube.com/watch?v=cq0Z_-cOjww" className="play-btn video-play-icon"><i className="mdi mdi-play text-center"></i></Link></p>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </section>  */}

               <section className="section bg-light pt-4 h-25 d-inline-block w-100" id="services"></section>
               <div>
               <section className="section pt-4 pb-0" id="services">
                    <div className="container">
                        <div className="row vertical-content">
                            <div className="col-lg-12 pt-4">
                                <div className="features-box mb-4 pt-4 text-center">
                                    <h1 className="pb-4 mx-auto">Get In Touch</h1>
                                    <p className=" web-desc mx-auto">We invite you to contact us if interested in providing one of the products to employees, clients or to join the network.    </p>
                                    <p className=" web-desc mx-auto">Contact us for a custom quote.   </p>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               </div>

                {/* Contact Component*/}
                <EmailForm />

               <ContactAdditonalInfo/>
==                
                {/* Footer Component*/}
                <Footer />

                {/* FooterLinks Component*/}
                {/* <FooterLinks /> */}

                {/* Switcher Component*/}
               {/* <Switcher />  */}
        </Aux>
  	);
  }
}

export default ContactUs;