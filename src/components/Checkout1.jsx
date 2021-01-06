import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Mobileview from "./Mobileview";
import { Link } from "react-router-dom";

class Checkout1 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <body>
          <div className="page-wrapper">
            <Header />
            <main className="main">
              <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                <div className="container">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="index-2.html">Home </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Checkout
                    </li>
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

                        <form action="#">
                          <div className="form-group required-field">
                            <label>Email Address </label>
                            <div className="form-control-tooltip">
                              <input
                                type="email"
                                className="form-control"
                                required
                              />
                              <span
                                className="input-tooltip"
                                data-toggle="tooltip"
                                title="We'll send your order confirmation here."
                                data-placement="right"
                              >
                                <i className="icon-question-circle"></i>
                              </span>
                            </div>
                            {/* End .form-control-tooltip */}
                          </div>
                          {/* End .form-group */}

                          <div className="form-group required-field">
                            <label>Password </label>
                            <input
                              type="password"
                              className="form-control"
                              required
                            />
                          </div>
                          {/* End .form-group */}

                          <p>
                            You already have an account with us. Sign in or
                            continue as guest.
                          </p>
                          <div className="form-footer">
                            <button type="submit" className="btn btn-primary">
                              LOGIN
                            </button>
                            <Link
                              to="forgot-password.html"
                              className="forget-pass"
                            >
                              {" "}
                              Forgot your password?{" "}
                            </Link>
                          </div>
                          {/* End .form-footer */}
                        </form>

                        <form action="#">
                          <div className="form-group required-field">
                            <label>First Name </label>
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                          </div>
                          {/* End .form-group */}

                          <div className="form-group required-field">
                            <label>Last Name </label>
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                          </div>
                          {/* End .form-group */}

                          <div className="form-group">
                            <label>Company </label>
                            <input type="text" className="form-control" />
                          </div>
                          {/* End .form-group */}

                          <div className="form-group required-field">
                            <label>Street Address </label>
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                          </div>
                          {/* End .form-group */}

                          <div className="form-group required-field">
                            <label>City </label>
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                          </div>
                          {/* End .form-group */}

                          <div className="form-group">
                            <label>State/Province</label>
                            <div className="select-custom">
                              <select className="form-control">
                                <option value="CA">California</option>
                                <option value="TX">Texas</option>
                              </select>
                            </div>
                            {/* End .select-custom */}
                          </div>
                          {/* End .form-group */}

                          <div className="form-group required-field">
                            <label>Zip/Postal Code </label>
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                          </div>
                          {/* End .form-group */}

                          <div className="form-group">
                            <label>Country</label>
                            <div className="select-custom">
                              <select className="form-control">
                                <option value="USA">United States</option>
                                <option value="Turkey">Turkey</option>
                                <option value="China">China</option>
                                <option value="Germany">Germany</option>
                              </select>
                            </div>
                            {/* End .select-custom */}
                          </div>
                          {/* End .form-group */}

                          <div className="form-group required-field">
                            <label>Phone Number </label>
                            <div className="form-control-tooltip">
                              <input
                                type="tel"
                                className="form-control"
                                required
                              />
                              <span
                                className="input-tooltip"
                                data-toggle="tooltip"
                                title="For delivery questions."
                                data-placement="right"
                              >
                                <i className="icon-question-circle"></i>
                              </span>
                            </div>
                            {/* End .form-control-tooltip */}
                          </div>
                          {/* End .form-group */}
                        </form>
                      </li>

                      <li>
                        <div className="checkout-step-shipping">
                          <h2 className="step-title">Shipping Methods</h2>

                          <table className="table table-step-shipping">
                            <tbody>
                              <tr>
                                <td>
                                  <input
                                    type="radio"
                                    name="shipping-method"
                                    value="flat"
                                  />
                                </td>
                                <td>
                                  <strong>$20.00</strong>
                                </td>
                                <td>Fixed</td>
                                <td>Flat Rate</td>
                              </tr>

                              <tr>
                                <td>
                                  <input
                                    type="radio"
                                    name="shipping-method"
                                    value="best"
                                  />
                                </td>
                                <td>
                                  <strong>$15.00</strong>
                                </td>
                                <td>Table Rate</td>
                                <td>Best Way</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* End .checkout-step-shipping */}
                      </li>
                    </ul>
                  </div>
                  {/* End .col-lg-8 */}

                  <div className="col-lg-4">
                    <div className="order-summary">
                      <h3>Summary</h3>

                      <h4>
                        <Link
                          data-toggle="collapse"
                          to="#order-cart-section"
                          className="collapsed"
                          role="button"
                          aria-expanded="false"
                          aria-controls="order-cart-section"
                        >
                          2 products in Cart{" "}
                        </Link>
                      </h4>

                      <div className="collapse" id="order-cart-section">
                        <table className="table table-mini-cart">
                          <tbody>
                            <tr>
                              <td className="product-col">
                                <figure className="product-image-container">
                                  <Link
                                    to="product.html"
                                    className="product-image"
                                  >
                                    <img
                                      src="assets/images/products/product-1.jpg"
                                      alt="product"
                                    />
                                  </Link>
                                </figure>
                                <div>
                                  <h2 className="product-title">
                                    <Link to="product.html">Baseball Cap </Link>
                                  </h2>

                                  <span className="product-qty">Qty: 4</span>
                                </div>
                              </td>
                              <td className="price-col">$17.90</td>
                            </tr>

                            <tr>
                              <td className="product-col">
                                <figure className="product-image-container">
                                  <Link
                                    to="product.html"
                                    className="product-image"
                                  >
                                    <img
                                      src="assets/images/products/product-2.jpg"
                                      alt="product"
                                    />
                                  </Link>
                                </figure>
                                <div>
                                  <h2 className="product-title">
                                    <Link to="product.html">Dress Shoes </Link>
                                  </h2>

                                  <span className="product-qty">Qty: 4</span>
                                </div>
                              </td>
                              <td className="price-col">$7.90</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* End #order-cart-section */}
                    </div>
                    {/* End .order-summary */}
                  </div>
                  {/* End .col-lg-4 */}
                </div>
                {/* End .row */}

                <div className="row">
                  <div className="col-lg-8">
                    <div className="checkout-steps-action">
                      <Link
                        to="checkout-review.html"
                        className="btn btn-primary float-right"
                      >
                        NEXT{" "}
                      </Link>
                    </div>
                    {/* End .checkout-steps-action */}
                  </div>
                  {/* End .col-lg-8 */}
                </div>
                {/* End .row */}
              </div>
              {/* End .container */}

              <div className="mb-6"></div>
              {/* margin */}
            </main>
            <Footer />{" "}
          </div>
          <Mobileview />
        </body>
      </React.Fragment>
    );
  }
}

export default Checkout1;
