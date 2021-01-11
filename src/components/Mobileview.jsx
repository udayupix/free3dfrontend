import React, { Component } from "react";
import { Link } from "react-router-dom";


class Mobileview extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        
          <div className="mobile-menu-overlay"></div>
          {/* End .mobil-menu-overlay */}

          <div className="mobile-menu-container">
            <div className="mobile-menu-wrapper">
              <span className="mobile-menu-close">
                <i className="icon-retweet"></i>
              </span>
              <nav className="mobile-nav">
                <ul className="mobile-menu">
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="category.html">Categories</Link>
                    <ul>
                      <li>
                        <Link to="category.html">Full Width Banner</Link>
                      </li>
                      <li>
                        <Link to="category-banner-boxed-slider.html">
                          Boxed Slider Banner
                        </Link>
                      </li>
                      <li>
                        <Link to="category-banner-boxed-image.html">
                          Boxed Image Banner
                        </Link>
                      </li>
                      <li>
                        <Link to="category.html">Left Sidebar</Link>
                      </li>
                      <li>
                        <Link to="category-sidebar-right.html">Right Sidebar</Link>
                      </li>
                      <li>
                        <Link to="category-flex-grid.html">Product Flex Grid</Link>
                      </li>
                      <li>
                        <Link to="category-horizontal-filter1.html">
                          Horizontal Filter 1
                        </Link>
                      </li>
                      <li>
                        <Link to="category-horizontal-filter2.html">
                          Horizontal Filter 2
                        </Link>
                      </li>
                      <li>
                        <Link to="#/">Product List Item Types</Link>
                      </li>
                      <li>
                        <Link to="category-infinite-scroll.html">
                          Ajax Infinite Scroll
                          <span className="tip tip-new">New</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="category-3col.html">3 Columns Products</Link>
                      </li>
                      <li>
                        <Link to="category.html">4 Columns Products</Link>
                      </li>
                      <li>
                        <Link to="category-5col.html">5 Columns Products</Link>
                      </li>
                      <li>
                        <Link to="category-6col.html">6 Columns Products</Link>
                      </li>
                      <li>
                        <Link to="category-7col.html">7 Columns Products</Link>
                      </li>
                      <li>
                        <Link to="category-8col.html">8 Columns Products</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="product.html">Products</Link>
                    <ul>
                      <li>
                        <Link to="#/">Variations</Link>
                        <ul>
                          <li>
                            <Link to="product.html">Horizontal Thumbnails</Link>
                          </li>
                          <li>
                            <Link to="product-full-width.html">
                              Vertical Thumbnails
                              <span className="tip tip-hot">Hot!</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="product.html">Inner Zoom</Link>
                          </li>
                          <li>
                            <Link to="product-addcart-sticky.html">
                              Addtocart Sticky
                            </Link>
                          </li>
                          <li>
                            <Link to="product-sidebar-left.html">
                              Accordion Tabs
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="#/">Variations</Link>
                        <ul>
                          <li>
                            <Link to="product-sticky-tab.html">Sticky Tabs</Link>
                          </li>
                          <li>
                            <Link to="product-simple.html">Simple Product</Link>
                          </li>
                          <li>
                            <Link to="product-sidebar-left.html">
                              With Left Sidebar
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="#/">Product Layout Types</Link>
                        <ul>
                          <li>
                            <Link to="product.html">Default Layout</Link>
                          </li>
                          <li>
                            <Link to="product-extended-layout.html">
                              Extended Layout
                            </Link>
                          </li>
                          <li>
                            <Link to="product-full-width.html">
                              Full Width Layout
                            </Link>
                          </li>
                          <li>
                            <Link to="product-grid-layout.html">
                              Grid Images Layout
                            </Link>
                          </li>
                          <li>
                            <Link to="product-sticky-both.html">
                              Sticky Both Side Info
                              <span className="tip tip-hot">Hot!</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="product-sticky-info.html">
                              Sticky Right Side Info
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#/">
                      Pages<span className="tip tip-hot">Hot!</span>
                    </Link>
                    <ul>
                      <li>
                        <Link to="cart.html">Shopping Cart</Link>
                      </li>
                      <li>
                        <Link to="#/">Checkout</Link>
                        <ul>
                          <li>
                            <Link to="checkout-shipping.html">
                              Checkout Shipping
                            </Link>
                          </li>
                          <li>
                            <Link to="checkout-shipping-2.html">
                              Checkout Shipping 2
                            </Link>
                          </li>
                          <li>
                            <Link to="checkout-review.html">Checkout Review</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="about.html">About</Link>
                      </li>
                      <li>
                        <Link to="#/" className="login-link">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link to="forgot-password.html">Forgot Password</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="blog.html">Blog</Link>
                    <ul>
                      <li>
                        <Link to="single.html">Blog Post</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="contact.html">Contact Us</Link>
                  </li>
                </ul>
              </nav>
              {/* End .mobile-nav */}

              <div className="social-icons">
                <Link to="#/" className="social-icon" target="_blank">
                  <i className="icon-facebook"></i>
                </Link>
                <Link to="#/" className="social-icon" target="_blank">
                  <i className="icon-twitter"></i>
                </Link>
                <Link to="#/" className="social-icon" target="_blank">
                  <i className="icon-instagram"></i>
                </Link>
              </div>
              {/* End .social-icons */}
            </div>
            {/* End .mobile-menu-wrapper */}
          </div>
          {/* End .mobile-menu-container */}

          {/*Add Cart Modal */}
    <div className="modal fade" id="addCartModal" tabindex="-1" role="dialog" aria-labelledby="addCartModal" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body add-cart-box text-center">
            <p>You've just added this product to the<br/>cart:</p>
            <h4 id="productTitle">Product</h4>
            <img src="assets/images/products/product-3.jpg" id="productImage" width="100" height="100" alt="adding"/>
            <div className="btn-actions">
                <Link to="cart.html"><button className="btn-primary">Go to cart page</button></Link>
                <Link to="#/"><button className="btn-primary" data-dismiss="modal">Continue</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Link id="scroll-top" to="#top" title="Top" role="button"><i className="icon-angle-up"></i></Link>
        
      </React.Fragment>
    );
  }
}

export default Mobileview;
