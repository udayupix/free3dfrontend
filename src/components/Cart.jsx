import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Mobileview from "./Mobileview";
import { Link } from "react-router-dom";

class Signup extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        
        <Header />
        <div className="page-wrapper">
          <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-1">
              <div className="container">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="index-2.html">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Shopping Cart
                  </li>
                </ol>
              </div>
            </nav>
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="cart-table-container">
                    <table className="table table-cart">
                      <thead>
                        <tr>
                          <th className="product-col">Product</th>
                          <th className="price-col">Price</th>
                          <th className="qty-col">Qty</th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="product-row">
                          <td className="product-col">
                            <figure className="product-image-container">
                              <Link to="product.html" className="product-image">
                                <img
                                  src="assets/images/products/product-4.jpg"
                                  alt="product"
                                />
                              </Link>
                            </figure>
                            <h2 className="product-title">
                              <Link to="product.html">Ratchet Belt</Link>
                            </h2>
                          </td>
                          <td>$17.90</td>
                          <td>
                            <input
                              className="vertical-quantity form-control"
                              type="text"
                            />
                          </td>
                          <td>$17.90</td>
                        </tr>
                        <tr className="product-action-row">
                          <td colspan="4" className="clearfix">
                            <div className="float-left">
                              <Link to="#/" className="btn-move">
                                Move to Wishlist
                              </Link>
                            </div>
                            {/* End .float-left */}

                            <div className="float-right">
                              <Link
                                to="#/"
                                title="Edit product"
                                className="btn-edit"
                              >
                                <span className="sr-only">Edit</span>
                                <i className="icon-pencil"></i>
                              </Link>
                              <Link
                                to="#/"
                                title="Remove product"
                                className="btn-remove"
                              >
                                <span className="sr-only">Remove</span>
                              </Link>
                            </div>
                            {/* End .float-right */}
                          </td>
                        </tr>

                        <tr className="product-row">
                          <td className="product-col">
                            <figure className="product-image-container">
                              <Link to="product.html" className="product-image">
                                <img
                                  src="assets/images/products/product-3.jpg"
                                  alt="product"
                                />
                              </Link>
                            </figure>
                            <h2 className="product-title">
                              <Link to="product.html">Leather Belt</Link>
                            </h2>
                          </td>
                          <td>$8.90</td>
                          <td>
                            <input
                              className="vertical-quantity form-control"
                              type="text"
                            />
                          </td>
                          <td>$8.90</td>
                        </tr>
                        <tr className="product-action-row">
                          <td colspan="4" className="clearfix">
                            <div className="float-left">
                              <Link to="#/" className="btn-move">
                                Move to Wishlist
                              </Link>
                            </div>
                            {/* End .float-left */}

                            <div className="float-right">
                              <Link
                                to="#/"
                                title="Edit product"
                                className="btn-edit"
                              >
                                <span className="sr-only">Edit</span>
                                <i className="icon-pencil"></i>
                              </Link>
                              <Link
                                to="#/"
                                title="Remove product"
                                className="btn-remove"
                              >
                                <span className="sr-only">Remove</span>
                              </Link>
                            </div>
                            {/* End .float-right */}
                          </td>
                        </tr>
                      </tbody>

                      <tfoot>
                        <tr>
                          <td colspan="4" className="clearfix">
                            <div className="float-left">
                              <Link
                                to="category.html"
                                className="btn btn-outline-secondary"
                              >
                                Continue Shopping
                              </Link>
                            </div>
                            {/* End .float-left */}

                            <div className="float-right">
                              <Link
                                to="#/"
                                className="btn btn-outline-secondary btn-clear-cart"
                              >
                                Clear Shopping Cart
                              </Link>
                              <Link
                                to="#/"
                                className="btn btn-outline-secondary btn-update-cart"
                              >
                                Update Shopping Cart
                              </Link>
                            </div>
                            {/* End .float-right */}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  {/* End .cart-table-container */}

                  <div className="cart-discount">
                    <h4>Apply Discount Code</h4>
                    <form action="#/">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="Enter discount code"
                          required
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-sm btn-primary"
                            type="submit"
                          >
                            Apply Discount
                          </button>
                        </div>
                      </div>
                      {/* End .input-group */}
                    </form>
                  </div>
                  {/* End .cart-discount */}
                </div>
                {/* End .col-lg-8 */}

                <div className="col-lg-4">
                  <div className="cart-summary">
                    <h3>Summary</h3>

                    <h4>
                      <Link
                        data-toggle="collapse"
                        to="#total-estimate-section"
                        className="collapsed"
                        role="button"
                        aria-expanded="false"
                        aria-controls="total-estimate-section"
                      >
                        Estimate Shipping and Tax
                      </Link>
                    </h4>

                    <div className="collapse" id="total-estimate-section">
                      <form action="#/">
                        <div className="form-group form-group-sm">
                          <label>Country</label>
                          <div className="select-custom">
                            <select className="form-control form-control-sm">
                              <option value="USA">United States</option>
                              <option value="Turkey">Turkey</option>
                              <option value="China">China</option>
                              <option value="Germany">Germany</option>
                            </select>
                          </div>
                          {/* End .select-custom */}
                        </div>
                        {/* End .form-group */}

                        <div className="form-group form-group-sm">
                          <label>State/Province</label>
                          <div className="select-custom">
                            <select className="form-control form-control-sm">
                              <option value="CA">California</option>
                              <option value="TX">Texas</option>
                            </select>
                          </div>
                          {/* End .select-custom */}
                        </div>
                        {/* End .form-group */}

                        <div className="form-group form-group-sm">
                          <label>Zip/Postal Code</label>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </div>
                        {/* End .form-group */}

                        <div className="form-group form-group-custom-control">
                          <label>Flat Way</label>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="flat-rate"
                            />
                            <label
                              className="custom-control-label"
                              for="flat-rate"
                            >
                              Fixed $5.00
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .form-group */}

                        <div className="form-group form-group-custom-control">
                          <label>Best Rate</label>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="best-rate"
                            />
                            <label
                              className="custom-control-label"
                              for="best-rate"
                            >
                              Table Rate $15.00
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .form-group */}
                      </form>
                    </div>
                    {/* End #total-estimate-section */}

                    <table className="table table-totals">
                      <tbody>
                        <tr>
                          <td>Subtotal</td>
                          <td>$17.90</td>
                        </tr>

                        <tr>
                          <td>Tax</td>
                          <td>$0.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td>Order Total</td>
                          <td>$17.90</td>
                        </tr>
                      </tfoot>
                    </table>

                    <div className="checkout-methods">
                      <Link
                        to="checkout-shipping.html"
                        className="btn btn-block btn-sm btn-primary"
                      >
                        Go to Checkout
                      </Link>
                      <Link to="#/" className="btn btn-link btn-block">
                        Check Out with Multiple Addresses
                      </Link>
                    </div>
                    {/* End .checkout-methods */}
                  </div>
                  {/* End .cart-summary */}
                </div>
                {/* End .col-lg-4 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}

            <div className="mb-6"></div>
          </main>
        </div>

        <Footer />

        <Mobileview />
      </React.Fragment>
    );
  }
}

export default Signup;
