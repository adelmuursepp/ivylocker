import React from 'react';
import Navbar from './components/Navbar';
import AboutComponent from './components/AboutComponent';
import ContactAdditionalInfo from './components/ContactAdditonalInfo';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import FooterLinks from './components/FooterLinks';
import { Link } from 'react-router-dom';
import Aux from './hoc/Aux_';


class About extends React.Component {
  render() {

  	return (
        <Aux>
                {/* Navbar Component*/}
                <Navbar />

                <section className="section bg-about height-100vh" id="home">
                    <div className="bg-overlay"></div>
                    <div className="display-table height-70vh">
                        <div className="display-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-white text-center">
                                        <h1 className="home-title">Who we are</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </section>

                {/* Features Component*/}
                <AboutComponent />

                {/* Contact Component*/}
                {/* <Contact /> */}

                {/* <ContactAdditionalInfo/> */}

                {/* SocialMedia Component*/}
                <SocialMedia />
                
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

export default About;