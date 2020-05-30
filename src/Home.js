import React from 'react';
import Navbar from './components/Navbar';
/* Section 2 */
import ProductsComponentIntro from './components/ProductsComponentIntro';
/* Section 3 */
import SolutionsIntro from './components/SolutionsIntro';
/* Section 4 */
import ServicesComponentIntro from './components/ServicesComponentIntro';
/* Footer */
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import Aux from './hoc/Aux_';

class Home extends React.Component {
  render() {

  	return (
    <Aux>
                {/* Navbar Component*/}
                <Navbar />

                {/* Section 1 */}

                <section className="section bg-home height-100vh" id="home">
                    <div className="bg-overlay"></div>
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-white text-center">
                                        <h1 className="home-title">There is one thing we all have in common</h1>
                                        <p className="play-shadow margin-t-30 margin-l-r-auto">
                                            <Link to="https://www.youtube.com/watch?v=GtKrl8OvEVY" className="play-btn video-play-icon">
                                                <i className="mdi mdi-play text-center"></i>
                                            </Link>
                                        </p>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </section>

                {/* Section 2 */}
                {/* Products Intro Component*/}
                

                {/* Section 3 */}
                {/* Solutions Intro Component*/}
                <SolutionsIntro />

                {/* Section 4 */}
                {/* Services Intro Component*/}
                <ServicesComponentIntro />

                {/* SocialMedia Component*/}
                <SocialMedia />
                
                {/* Footer Component*/}
                <Footer />
        </Aux>
  	);
  }
}

export default Home;