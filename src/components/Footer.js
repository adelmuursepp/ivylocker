import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
  	return (
         <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 margin-t-20">
                        <div className="text-muted margin-t-20 footer-list link-white">
                                <p className='mx-auto'><Link  className="text-muted margin-t-20 footer-list link-white"  to="JavaScript:Void(0);">Connect to I.V.I.E.Hub</Link></p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20 footer-list ">
                    <div className="text-muted margin-t-20 footer-list link-white">
                        <p className='mx-auto text-center'><Link className="text-muted margin-t-20 footer-list link-white" to="JavaScript:Void(0);">Investors</Link></p>
                        </div>
                    </div>
                </div>

                <div className="row text-center col-12">
                    <p className="text-muted margin-t-20 text-center mx-auto">Copyright© 2010-2020  Ivynet, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
  	);
  }
}
export default Footer;