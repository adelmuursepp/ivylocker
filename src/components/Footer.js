import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
  	return (
         <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 margin-t-20">
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><Link to="JavaScript:Void(0);">Connect to I.V.I.E.Hub</Link></li>
                                <li><Link to="JavaScript:Void(0);">Investors</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </footer>
  	);
  }
}
export default Footer;