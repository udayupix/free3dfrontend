import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Mobileview from "./Mobileview";
import { Link } from "react-router-dom";

class Checkout2 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
      
          <div className="page-wrapper">
            <Header />
            <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"> <Link  to="index-2.html">Home </Link ></li>
                        <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                    </ol>
                </div>
            </nav>
            <div className="container">
                <ul className="checkout-progress-bar">
                    <li className="active">
                        <span>Shipping</span>
                    </li>
                    <li>
                        <span>Review &amp; Payments</span>
                    </li>
                </ul>
                <div className="row">
                    <div className="col-lg-8">
                        <ul className="checkout-steps">
                            <li>
                                <h2 className="step-title">Shipping Address</h2>

                                <div className="shipping-step-addresses">
                                    <div className="shipping-address-box active">
                                        <address>
                                            Desmond Mason <br/>
                                            123 Street Name, City Name <br/>
                                            Los Angeles, California 03100 <br/>
                                            United States <br/>
                                            (123) 456-7890 <br/>
                                        </address>

                                        <div className="address-box-action clearfix">
                                             <Link  to="#/" className="btn btn-sm btn-link">
                                                Edit
                                             </Link >

                                             <Link  to="#/" className="btn btn-sm btn-outline-secondary float-right">
                                                Ship Here
                                             </Link >
                                        </div>{/* End .address-box-action*/}
                                    </div>{/* End .shipping-address-box*/}
                                    <div className="shipping-address-box">
                                        <address>
                                            Susan Mason <br/>
                                            123 Street Name, City Name <br/>
                                            Los Angeles, California 03100 <br/>
                                            United States <br/>
                                            (123) 789-6150 <br/>
                                        </address>

                                        <div className="address-box-action clearfix">
                                             <Link  to="#/" className="btn btn-sm btn-link">
                                                Edit
                                             </Link >

                                             <Link  to="#/" className="btn btn-sm btn-outline-secondary float-right">
                                                Ship Here
                                             </Link >
                                        </div>{/* End .address-box-action*/}
                                    </div>{/* End .shipping-address-box*/}
                                </div>{/* End .shipping-step-addresses*/}
                                 <Link  to="#/" className="btn btn-sm btn-outline-secondary btn-new-address" data-toggle="modal" data-target="#addressModal">+ New Address </Link >
                            </li>


                            <li>
                                <div className="checkout-step-shipping">
                                    <h2 className="step-title">Shipping Methods</h2>

                                    <table className="table table-step-shipping">
                                        <tbody>
                                            <tr>
                                                <td><input type="radio" name="shipping-method" value="flat"/></td>
                                                <td><strong>$20.00</strong></td>
                                                <td>Fixed</td>
                                                <td>Flat Rate</td>
                                            </tr>

                                            <tr>
                                                <td><input type="radio" name="shipping-method" value="best"/></td>
                                                <td><strong>$15.00</strong></td>
                                                <td>Table Rate</td>
                                                <td>Best Way</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>{/* End .checkout-step-shipping*/}
                            </li>
                        </ul>
                    </div>{/* End .col-lg-8*/}

                    <div className="col-lg-4">
                        <div className="order-summary">
                            <h3>Summary</h3>

                            <h4>
                                <Link data-toggle="collapse" to="#order-cart-section" className="collapsed" role="button" aria-expanded="false" aria-controls="order-cart-section">2 products in Cart </Link >
                            </h4>

                            <div className="collapse" id="order-cart-section">
                                <table className="table table-mini-cart">
                                    <tbody>
                                        <tr>
                                            <td className="product-col">
                                                <figure className="product-image-container">
                                                     <Link  to="product.html" className="product-image">
                                                        <img src="assets/images/products/product-1.jpg" alt="product"/>
                                                     </Link >
                                                </figure>
                                                <div>
                                                    <h2 className="product-title">
                                                         <Link  to="product.html">Baseball Cap </Link >
                                                    </h2>

                                                    <span className="product-qty">Qty: 4</span>
                                                </div>
                                            </td>
                                            <td className="price-col">$17.90</td>
                                        </tr>

                                        <tr>
                                            <td className="product-col">
                                                <figure className="product-image-container">
                                                     <Link  to="product.html" className="product-image">
                                                        <img src="assets/images/products/product-2.jpg" alt="product"/>
                                                     </Link >
                                                </figure>
                                                <div>
                                                    <h2 className="product-title">
                                                         <Link  to="product.html">Dress Shoes </Link >
                                                    </h2>

                                                    <span className="product-qty">Qty: 4</span>
                                                </div>
                                            </td>
                                            <td className="price-col">$7.90</td>
                                        </tr>
                                    </tbody>    
                                </table>
                            </div>{/* End #order-cart-section*/}
                        </div>{/* End .order-summary*/}
                    </div>{/* End .col-lg-4*/}
                </div>{/* End .row*/}

                <div className="row">
                    <div className="col-lg-8">
                        <div className="checkout-steps-action">
                             <Link  to="checkout-review.html" className="btn btn-primary float-right">NEXT </Link >
                        </div>{/* End .checkout-steps-action*/}
                    </div>{/* End .col-lg-8*/}
                </div>{/* End .row*/}
            </div>{/* End .container*/}

            <div className="mb-6"></div>

                
            </main>
         
        
        <Footer/>
        </div>
        <Mobileview/>
       
      </React.Fragment>
    );
  }
}

export default Checkout2;
