import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
    state = {  }
    render() { 
        return (<React.Fragment>
            
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                             <Link  to="#/" className="widget-newsletter-title">Sign Up to Newsletter </Link>
                        </div>
                        <div className="col-lg-4">
                            <p className="widget-newsletter-content">Get all the latest information on Events, Sales and Offers.<br/>
                                <span className="widget-newsletter-content">Receive $10 coupon for first shopping.</span>
                            </p>
                        </div>
                        <div className="col-lg-5">
                            <form action="#/">
                                <div className="footer-submit-wrapper">
                                    <input type="email" className="form-control" placeholder="Enter your Email address" required/>
                                    <button type="submit" className="btn">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="footer-middle   ">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                             <Link  to="index-2.html">
                                <img src="assets/images/logo-dark.png" alt="Porto Logo" className="mt-2"/>
                             </Link>
                            <div className="row">
                                <div className="col-sm-6 col-xl-4">
                                    <div className="contact-widget phone">
                                        <div  style={{"display":'inline-block'}}  >
                                            <h4 className="widget-title">call us now</h4>
                                             <Link  to="#/">+123 5678 890 </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-4">
                                    <div className="contact-widget email">
                                        <h4 className="widget-title" style={{"marginBottom":".5rem"}} >e-mail address</h4>
                                         <Link  to="mailto:mail@example.com">mail@domain.com </Link>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="contact-widget follow">
                                        <h4 className="widget-title">follow us</h4>
                                        <div className="social-icons">
                                             <Link  to="#/" className="social-icon" target="_blank"><i className="fab fa-facebook-f"></i> </Link>
                                             <Link  to="#/" className="social-icon" target="_blank"><i className="fab fa-twitter"></i> </Link>
                                             <Link  to="#/" className="social-icon" target="_blank"><i className="fab fa-linkedin-in"></i> </Link>
                                        </div>{/* End .social-icons */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="widget">
                                        <h4 className="widget-title">Categories</h4>
                                        <ul className="links">
                                            <li> <Link  to="#/">Fashion </Link></li>
                                            <li> <Link  to="#/">Electronics </Link></li>
                                            <li> <Link  to="#/">Gifts </Link></li>
                                            <li> <Link  to="#/">Garden </Link></li>
                                            <li> <Link  to="#/">Music </Link></li>
                                            <li> <Link  to="#/">Motors </Link></li>
                                        </ul>
                                    </div>{/* End .widget */}
                                </div>
                                <div className="col-sm-4">
                                    <div className="widget">
                                        <h4 className="widget-title">About</h4>
                                        <ul className="links">
                                            <li> <Link  to="about.html">About Us </Link></li>
                                            <li> <Link  to="contact.html">Contact Us </Link></li>
                                            <li> <Link  to="#/">All Collections </Link></li>
                                            <li> <Link  to="#/">Privacy policy </Link></li>
                                            <li> <Link  to="#/">Terms & Conditions </Link></li>
                                        </ul>
                                    </div>{/* End .widget */}
                                </div>
                                <div className="col-sm-4">
                                    <div className="widget">
                                        <h4 className="widget-title">Customer Care</h4>
                                        <ul className="links">
                                            <li> <Link  to="my-account.html">My Account </Link></li>
                                            <li> <Link  to="#/">Wishlist </Link></li>
                                            <li> <Link  to="#/">Shopping Cart </Link></li>
                                            <li> <Link  to="#/">Terms & Conditions </Link></li>
                                            <li> <Link  to="#/">FAQs </Link></li>
                                        </ul>
                                    </div>{/* End .widget */}
                                </div>
                            </div>
                        </div>
                    </div>{/* End .row */}
                </div>{/* End .footer-middle */}
                <div className="footer-bottom">
                    <p className="footer-copyright">Porto eCommerce. &copy;  2020.  All Rights Reserved</p>
                    <img src="assets/images/payments_long.png" alt="hi" width="180px"  style={{"maxHeight":"24px" }} />
                </div>{/* End .footer-bottom */}
            </div>
        </footer>
        </React.Fragment>);
    }
}
 
export default Footer;