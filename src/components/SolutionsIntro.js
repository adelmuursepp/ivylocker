import React from 'react';
import { Link } from 'react-router-dom';

class SolutionsIntro extends React.Component {
  render() {
  	return (
        <section className="section bg-light" id="solutions">
        <div className="container">
        <div className="row vertical-content">
                <div className="col-lg-12">
                    <div className="features-box">
                        <h3>Solutions</h3>
                        <p className=" web-desc">If you’re a consumer our solution will save your family countless hours of administrative headaches by sending notifications you pre-select; so they don’t have to.  See our IvyLocker® Product.</p>
                        <p className=" web-desc">Benefits of IvyNet solution which may be realized by any partner</p>
                

                        <a href="/solutions" className="btn btn-custom margin-t-30 waves-effect waves-light">Read about solutions <i className="mdi mdi-arrow-right"></i></a>
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
export default SolutionsIntro;