import React, { Component } from "react";

import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="page-wrapper ">
          <div className="header ">
            <div className="header-top   ">
              <div className="container ">
                <div className="header-left header-dropdowns">
                  <div className="header-dropdown">
                    <Link to="#/">USD </Link>
                    <div className="header-menu">
                      <ul>
                        <li>
                          <Link to="#/">EUR </Link>
                        </li>
                        <li>
                          <Link to="#/">USD </Link>
                        </li>
                      </ul>
                    </div>
                    {/* End .header-menu */}
                  </div>
                  {/* End .header-dropown */}

                  <div className="header-dropdown">
                    <Link to="#/">ENGLISH </Link>
                    <div className="header-menu">
                      <ul>
                        <li>
                          <Link to="#/">ENGLISH </Link>
                        </li>
                        <li>
                          <Link to="#/">FRENCH </Link>
                        </li>
                      </ul>
                    </div>
                    {/* End .header-menu */}
                  </div>
                  {/* End .header-dropown */}
                </div>
                {/* End .header-left */}

                <div className="header-right">
                  <p className="welcome-msg">Default welcome msg! </p>

                  <div className="header-dropdown dropdown-expanded">
                    <Link to="#/">Links </Link>
                    <div className="header-menu">
                      <nav>
                        <ul>
                        <li>
                            <Link to="/">HOME</Link>
                          </li>
                          <li>
                            <Link to="/accountpage">
                              {/* <Link to="/accountpage"> */}
                              MY ACCOUNT
                            </Link>
                          </li>

                          <li>
                            <Link to="/cart">MY WISHLIST </Link>
                          </li>

                          <li>
                            <Link to="/signup">SIGN UP </Link>
                          </li>
                          <li>
                            <Link to="/login">LOG IN</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>

                    {/* End .header-menu */}
                  </div>
                  {/* End .header-dropown */}
                </div>
                {/* End .header-right */}
              </div>
              {/* End .container */}
            </div>
            {/* End .header-top */}

            <div className="header-middle">
              <div className="container">
                <div className="header-left">
                  <button className="mobile-menu-toggler" type="button">
                    <i className="icon-menu"></i>
                  </button>
                  <Link to="/" className="logo">
                    <img src="assets/images/logo.png" alt="Porto Logo" />
                  </Link>
                </div>
                {/* End .header-left */}

                <div className="header-center">
                  <div className="header-search">
                    <Link to="#/" className="search-toggle" role="button">
                      <i className="icon-magnifier"></i>
                    </Link>
                    <form action="#/" method="get">
                      <div className="header-search-wrapper">
                        <input
                          type="search"
                          className="form-control"
                          name="q"
                          id="q"
                          placeholder="I'm searching for..."
                          required
                        />

                        {/* End .select-custom */}
                        <button className="btn" type="submit">
                          <i className="icon-magnifier"></i>
                        </button>
                      </div>
                      {/* End .header-search-wrapper */}
                    </form>
                  </div>
                  {/* End .header-search */}
                </div>
                {/* End .headeer-center */}

                <div className="header-right">
                  <Link to="/free" className="porto-icon">
                    <h4 style={{ fontStyle: "normal" }}>Free 3D Models</h4>
                  </Link>
                  <Link to="/premium" className="porto-icon">
                    <h4 style={{ fontStyle: "normal" }}>Premium 3D models</h4>
                  </Link>

                  <div className="dropdown cart-dropdown">
                    <Link
                      to="#/"
                      className="dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-display="static"
                    >
                      <i
                        className="minicart-icon"
                        style={{ marginBottom: 15 }}
                      ></i>

                      <span className="cart-count">2</span>
                    </Link>

                    <div className="dropdown-menu">
                      <div className="dropdownmenu-wrapper">
                        <div className="dropdown-cart-header">
                          <span>2 Items</span>

                          <Link to="cart.html">View Cart </Link>
                        </div>
                        {/* End .dropdown-cart-header */}
                        <div className="dropdown-cart-products">
                          <div className="product">
                            <div className="product-details">
                              <h4 className="product-title">
                                <Link to="#/">Woman Ring </Link>
                              </h4>

                              <span className="cart-product-info">
                                <span className="cart-product-qty">1</span>x
                                $99.00
                              </span>
                            </div>
                            {/* End .product-details */}

                            <figure className="product-image-container">
                              <Link to="#/" className="product-image">
                                <img
                                  src="assets/images/products/cart/product-1.jpg"
                                  alt="product"
                                />
                              </Link>
                              <Link
                                to="#/"
                                className="btn-remove"
                                title="Remove Product"
                              >
                                <i className="icon-retweet"></i>
                              </Link>
                            </figure>
                          </div>
                          {/* End .product */}

                          <div className="product">
                            <div className="product-details">
                              <h4 className="product-title">
                                <Link to="#/">Woman Necklace </Link>
                              </h4>

                              <span className="cart-product-info">
                                <span className="cart-product-qty">1</span>x
                                $35.00
                              </span>
                            </div>
                            {/* End .product-details */}

                            <figure className="product-image-container">
                              <Link to="#/" className="product-image">
                                <img
                                  src="assets/images/products/cart/product-2.jpg"
                                  alt="product"
                                />
                              </Link>
                              <Link
                                to="#/"
                                className="btn-remove"
                                title="Remove Product"
                              >
                                <i className="icon-retweet"></i>
                              </Link>
                            </figure>
                          </div>
                          {/* End .product */}
                        </div>
                        {/* End .cart-product */}

                        <div className="dropdown-cart-total">
                          <span>Total</span>

                          <span className="cart-total-price">$134.00</span>
                        </div>
                        {/* End .dropdown-cart-total */}

                        <div className="dropdown-cart-action">
                          <Link to="/cart" className="btn btn-block">
                            Checkout
                          </Link>
                        </div>
                        {/* End .dropdown-cart-total */}
                      </div>
                      {/* End .dropdownmenu-wrapper */}
                    </div>
                    {/* End .dropdown-menu */}
                  </div>
                  {/* End .dropdown */}
                </div>
                {/* End .header-right */}
              </div>
              {/* End .container */}
            </div>
            {/* End .header-middle */}

            {/* <div className="header-bottom sticky-header">
              <div className="container">
                <nav className="main-nav">
                  <ul className="menu sf-arrows">
                    <li className="active">
                      <Link to="/">Home </Link>
                    </li>
                    <li>
                      <Link to="#/" className="sf-with-ul">
                        Categories
                      </Link>
                      <div className="megamenu megamenu-fixed-width">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="menu-title">
                                  <Link to="#/">
                                    Variations 1
                                    <span className="tip tip-new">New!</span>
                                  </Link>
                                </div>
                                <ul>
                                  <li>
                                    <Link to="#/">
                                      Fullwidth Banner
                                      <span className="tip tip-hot">Hot!</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#/">Boxed Slider Banner</Link>
                                  </li>
                                  <li>
                                    <Link to="#/">Boxed Image Banner</Link>
                                  </li>
                                  <li>
                                    <Link to="#/">Left Sidebar</Link>
                                  </li>
                                  <li>
                                    <Link to="#/">Right Sidebar</Link>
                                  </li>
                                  <li>
                                    <Link to="#/">Product Flex Grid</Link>
                                  </li>
                                  <li>
                                    <Link to="#/">Horizontal Filter1</Link>
                                  </li>
                                  <li>
                                    <Link to="#/">Horizontal Filter2</Link>
                                  </li>
                                </ul>
                              </div>
                             
                              <div className="col-lg-6">
                                <div className="menu-title">
                                  <Link to="#/">Variations 2 </Link>
                                </div>
                                <ul>
                                  <li>
                                    <Link to="#/">Product List Item Types</Link>
                                  </li>
                                  <li>
                                    <Link to="category-infinite-scroll.html">
                                      Ajax Infinite Scroll
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#/">3 Columns Products</Link>
                                  </li>
                                  <li>
                                    <Link to="#/">
                                      4 Columns Products
                                      <span className="tip tip-new">New</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#/">5 Columns Products</Link>
                                  </li>
                                  <li>
                                    <Link to="#/">6 Columns Products</Link>
                                  </li>
                                  <li>
                                    <Link to="#/">7 Columns Products</Link>
                                  </li>
                                  <li>
                                    <Link to="#/">8 Columns Products</Link>
                                  </li>
                                </ul>
                              </div>
                            
                            </div>
                           
                          </div>
                          <div className="col-lg-4">
                            <div className="banner">
                              <Link to="#/">
                                <img
                                  src="assets/images/menu-banner-2.jpg"
                                  alt="Menu banner"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="megamenu-container">
                      <Link to="#/" className="sf-with-ul">
                        Products
                      </Link>
                      <div className="megamenu">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="menu-title">
                                  <Link to="#/">Variations </Link>
                                </div>
                                <ul>
                                  <li>
                                    <Link to="#/">Horizontal Thumbnails</Link>
                                  </li>
                                  <li>
                                    <Link to="#/">
                                      Vertical Thumbnails
                                      <span className="tip tip-hot">Hot!</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#/">Inner Zoom </Link>
                                  </li>
                                  <li>
                                    <Link to="#/">Addtocart Sticky</Link>
                                  </li>
                                  <li>
                                    <Link to="#/">Accordion Tabs</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-4">
                                <div className="menu-title">
                                  <Link to="#/">Variations </Link>
                                </div>
                                <ul>
                                  <li>
                                    <Link to="#/">Sticky Tabs</Link>
                                  </li>
                                  <li>
                                    <Link to="p#/">Simple Product</Link>
                                  </li>
                                  <li>
                                    <Link to="#/">With Left Sidebar</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-4">
                                <div className="menu-title">
                                  <Link to="#/">Product Layout Types </Link>
                                </div>
                                <ul>
                                  <li>
                                    <Link to="#/">Default Layout</Link>
                                  </li>
                                  <li>
                                    <Link to="#/">Extended Layout</Link>
                                  </li>
                                  <li>
                                    <Link to="#/">Full Width Layout</Link>
                                  </li>
                                  <li>
                                    <Link to="#/">Grid Images Layout</Link>
                                  </li>
                                  <li>
                                    <Link to="#/">
                                      Sticky Both Side Info
                                      <span className="tip tip-hot">Hot!</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="p#/">Sticky Right Side Info</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="banner">
                              <Link to="#/">
                                <img
                                  src="assets/images/menu-banner.jpg"
                                  alt="Menu banner"
                                  className="product-promo"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="#/" className="sf-with-ul">
                        Pages
                      </Link>

                      <ul>
                        <li>
                          <Link to="/cart">Shopping Cart </Link>
                        </li>
                        <li>
                          <Link to="#/">Checkout </Link>
                          <ul>
                            <li>
                              <Link to="/cart">Checkout Shipping</Link>
                            </li>
                            <li>
                              <Link to="checkout-shipping-2.html">
                                Checkout Shipping 2
                              </Link>
                            </li>
                            <li>
                              <Link to="checkout-review.html">
                                Checkout Review
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#/">Dashboard </Link>
                          <ul>
                            <li>
                              <Link to="dashboard.html">Dashboard </Link>
                            </li>
                            <li>
                              <Link to="my-account.html">My Account </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="about.html">About Us </Link>
                        </li>
                        <li>
                          <Link to="#/">Blog </Link>
                          <ul>
                            <li>
                              <Link to="blog.html">Blog </Link>
                            </li>
                            <li>
                              <Link to="single.html">Blog Post </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="contact.html">Contact Us </Link>
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
                      <Link to="#/" className="sf-with-ul">
                        Features
                      </Link>
                      <ul>
                        <li>
                          <Link to="#/">Header Types </Link>
                        </li>
                        <li>
                          <Link to="#/">Footer Types </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
             
            </div>
             */}
            {/* End .header-bottom */}
          
          
          </div>
         
        </div>
        <div className="mobile-menu-container">
              <div className="mobile-menu-wrapper">
                <span className="mobile-menu-close">
                  <i className="icon-retweet"></i>
                </span>
                <nav className="mobile-nav">
                  <ul className="mobile-menu">
                    <li className="active">
                      <Link to="#/">Home </Link>
                    </li>
                    <li>
                      <Link to="category.html">Categories </Link>
                      <ul>
                        <li>
                          <Link to="category.html">Full Width Banner </Link>
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
                          <Link to="category.html">Left Sidebar </Link>
                        </li>
                        <li>
                          <Link to="category-sidebar-right.html">
                            Right Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link to="category-flex-grid.html">
                            Product Flex Grid
                          </Link>
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
                          <Link to="#/">Product List Item Types </Link>
                        </li>
                        <li>
                          <Link to="category-infinite-scroll.html">
                            Ajax Infinite Scroll
                            <span className="tip tip-new">New</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="category-3col.html">
                            3 Columns Products{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="category.html">4 Columns Products </Link>
                        </li>
                        <li>
                          <Link to="category-5col.html">
                            5 Columns Products{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="category-6col.html">
                            6 Columns Products{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="category-7col.html">
                            7 Columns Products{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="category-8col.html">
                            8 Columns Products{" "}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#/">Products </Link>
                      <ul>
                        <li>
                          <Link to="#/">Variations </Link>
                          <ul>
                            <li>
                              <Link to="#/">Horizontal Thumbnails</Link>
                            </li>
                            <li>
                              <Link to="#/">
                                Vertical Thumbnails
                                <span className="tip tip-hot">Hot!</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#/">Inner Zoom </Link>
                            </li>
                            <li>
                              <Link to="#/">Addtocart Sticky</Link>
                            </li>
                            <li>
                              <Link to="#/">Accordion Tabs</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#/">Variations </Link>
                          <ul>
                            <li>
                              <Link to="#/">Sticky Tabs</Link>
                            </li>
                            <li>
                              <Link to="p#/">Simple Product</Link>
                            </li>
                            <li>
                              <Link to="#/">With Left Sidebar</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#/">Product Layout Types </Link>
                          <ul>
                            <li>
                              <Link to="#/">Default Layout </Link>
                            </li>
                            <li>
                              <Link to="#/">Extended Layout</Link>
                            </li>
                            <li>
                              <Link to="#/">Full Width Layout</Link>
                            </li>
                            <li>
                              <Link to="#/">Grid Images Layout</Link>
                            </li>
                            <li>
                              <Link to="#/">
                                Sticky Both Side Info
                                <span className="tip tip-hot">Hot!</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="p#/">Sticky Right Side Info</Link>
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
                          <Link to="cart.html">Shopping Cart </Link>
                        </li>
                        <li>
                          <Link to="#/">Checkout </Link>
                          <ul>
                            <li>
                              <Link to="/cart">Checkout Shipping</Link>
                            </li>
                            <li>
                              <Link to="checkout-shipping-2.html">
                                Checkout Shipping 2
                              </Link>
                            </li>
                            <li>
                              <Link to="checkout-review.html">
                                Checkout Review
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="about.html">About </Link>
                        </li>
                        <li>
                          <Link to="#/" className="login-link">
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link to="forgot-password.html">
                            Forgot Password{" "}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="blog.html">Blog </Link>
                      <ul>
                        <li>
                          <Link to="single.html">Blog Post </Link>
                        </li>
                      </ul>
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
      </React.Fragment>
    );
  }
}

export default Header;
