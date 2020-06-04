import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
  	return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div className="container">
                <Link className="navbar-brand logo text-uppercase" to="/">
                    <img src="images/brand-full-color.png" width="100px" className="img-fluid" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav navbar-center" id="mySidenav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/about" className="nav-link">Who we are</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/products" className="nav-link">Products</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/solutions" className="nav-link">Solutions</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/services" className="nav-link">Services</Link>
                        </li>

                    </ul>
                    <div className="nav-button ml-auto">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                            <Link to="/contact"><button type="button" className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light" id="contact-button">Contact Us</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
  	);
  }
}

export default Navbar;