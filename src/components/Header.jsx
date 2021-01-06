import React, { Component } from "react";

import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="page-wrapper">
          <div className="header">
            <div className="header-top">
              <div className="container">
                <div className="header-left header-dropdowns">
                  <div className="header-dropdown">
                    <a href="#/">USD </a>
                    <div className="header-menu">
                      <ul>
                        <li>
                          <a href="#/">EUR </a>
                        </li>
                        <li>
                          <a href="#/">USD </a>
                        </li>
                      </ul>
                    </div>
                    {/* End .header-menu */}
                  </div>
                  {/* End .header-dropown */}

                  <div className="header-dropdown">
                    <a href="#/">ENGLISH </a>
                    <div className="header-menu">
                      <ul>
                        <li>
                          <a href="#/">ENGLISH </a>
                        </li>
                        <li>
                          <a href="#/">FRENCH </a>
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
                    <a href="#/">Links </a>
                    <div className="header-menu">
                      <nav>
                        <ul>
                          <li>
                            <Link to={{ pathname: "/accountpage" }} target="/">
                              MY ACCOUNT{" "}
                            </Link>
                          </li>

                          <li>
                            <a href="/cart">MY WISHLIST </a>
                          </li>

                          <li>
                            <a href="/signup">SIGN UP </a>
                          </li>
                          <li>
                            <a href="/login">LOG IN</a>
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
                  <a href="/" className="logo">
                    <img src="assets/images/logo.png" alt="Porto Logo" />
                  </a>
                </div>
                {/* End .header-left */}

                <div className="header-center">
                  <div className="header-search">
                    <a href="#/" className="search-toggle" role="button">
                      <i className="icon-magnifier"></i>
                    </a>
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
                  <a href="#/" className="porto-icon">
                    <i className="icon icon-heart"></i>
                  </a>

                  <div className="dropdown cart-dropdown">
                    <a
                      href="#/"
                      className="dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-display="static"
                    >
                      <i className="minicart-icon"></i>
                      <span className="cart-count">2</span>
                    </a>

                    <div className="dropdown-menu">
                      <div className="dropdownmenu-wrapper">
                        <div className="dropdown-cart-header">
                          <span>2 Items</span>

                          <a href="cart.html">View Cart </a>
                        </div>
                        {/* End .dropdown-cart-header */}
                        <div className="dropdown-cart-products">
                          <div className="product">
                            <div className="product-details">
                              <h4 className="product-title">
                                <a href="product.html">Woman Ring </a>
                              </h4>

                              <span className="cart-product-info">
                                <span className="cart-product-qty">1</span>x
                                $99.00
                              </span>
                            </div>
                            {/* End .product-details */}

                            <figure className="product-image-container">
                              <a href="product.html" className="product-image">
                                <img
                                  src="assets/images/products/cart/product-1.jpg"
                                  alt="product"
                                />
                              </a>
                              <a
                                href="#/"
                                className="btn-remove"
                                title="Remove Product"
                              >
                                <i className="icon-retweet"></i>
                              </a>
                            </figure>
                          </div>
                          {/* End .product */}

                          <div className="product">
                            <div className="product-details">
                              <h4 className="product-title">
                                <a href="product.html">Woman Necklace </a>
                              </h4>

                              <span className="cart-product-info">
                                <span className="cart-product-qty">1</span>x
                                $35.00
                              </span>
                            </div>
                            {/* End .product-details */}

                            <figure className="product-image-container">
                              <a href="product.html" className="product-image">
                                <img
                                  src="assets/images/products/cart/product-2.jpg"
                                  alt="product"
                                />
                              </a>
                              <a
                                href="#/"
                                className="btn-remove"
                                title="Remove Product"
                              >
                                <i className="icon-retweet"></i>
                              </a>
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
                          <a
                            href="checkout-shipping.html"
                            className="btn btn-block"
                          >
                            Checkout
                          </a>
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

            <div className="header-bottom sticky-header">
              <div className="container">
                <nav className="main-nav">
                  <ul className="menu sf-arrows">
                    <li className="active">
                      <a href="/">Home </a>
                    </li>
                    <li>
                      <a href="category.html" className="sf-with-ul">
                        Categories
                      </a>
                      <div className="megamenu megamenu-fixed-width">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="menu-title">
                                  <a href="#/">
                                    Variations 1
                                    <span className="tip tip-new">New!</span>
                                  </a>
                                </div>
                                <ul>
                                  <li>
                                    <a href="category.html">
                                      Fullwidth Banner
                                      <span className="tip tip-hot">Hot!</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-banner-boxed-slider.html">
                                      Boxed Slider Banner
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-banner-boxed-image.html">
                                      Boxed Image Banner
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category.html">Left Sidebar </a>
                                  </li>
                                  <li>
                                    <a href="category-sidebar-right.html">
                                      Right Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-flex-grid.html">
                                      Product Flex Grid
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-horizontal-filter1.html">
                                      Horizontal Filter1
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-horizontal-filter2.html">
                                      Horizontal Filter2
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* End .col-lg-6 */}
                              <div className="col-lg-6">
                                <div className="menu-title">
                                  <a href="#/">Variations 2 </a>
                                </div>
                                <ul>
                                  <li>
                                    <a href="#/">Product List Item Types </a>
                                  </li>
                                  <li>
                                    <a href="category-infinite-scroll.html">
                                      Ajax Infinite Scroll
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-3col.html">
                                      3 Columns Products
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category.html">
                                      4 Columns Products{" "}
                                      <span className="tip tip-new">New</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-5col.html">
                                      5 Columns Products
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-6col.html">
                                      6 Columns Products
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-7col.html">
                                      7 Columns Products
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-8col.html">
                                      8 Columns Products
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* End .col-lg-6 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .col-lg-8 */}
                          <div className="col-lg-4">
                            <div className="banner">
                              <a href="#/">
                                <img
                                  src="assets/images/menu-banner-2.jpg"
                                  alt="Menu banner"
                                />
                              </a>
                            </div>
                            {/* End .banner */}
                          </div>
                          {/* End .col-lg-4 */}
                        </div>
                      </div>
                      {/* End .megamenu */}
                    </li>
                    <li className="megamenu-container">
                      <a href="product.html" className="sf-with-ul">
                        Products
                      </a>
                      <div className="megamenu">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="menu-title">
                                  <a href="#/">Variations </a>
                                </div>
                                <ul>
                                  <li>
                                    <a href="product.html">
                                      Horizontal Thumbnails
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-full-width.html">
                                      Vertical Thumbnails
                                      <span className="tip tip-hot">Hot!</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product.html">Inner Zoom </a>
                                  </li>
                                  <li>
                                    <a href="product-addcart-sticky.html">
                                      Addtocart Sticky
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-sidebar-left.html">
                                      Accordion Tabs
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* End .col-lg-4 */}
                              <div className="col-lg-4">
                                <div className="menu-title">
                                  <a href="#/">Variations </a>
                                </div>
                                <ul>
                                  <li>
                                    <a href="product-sticky-tab.html">
                                      Sticky Tabs
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-simple.html">
                                      Simple Product
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-sidebar-left.html">
                                      With Left Sidebar
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* End .col-lg-4 */}
                              <div className="col-lg-4">
                                <div className="menu-title">
                                  <a href="#/">Product Layout Types </a>
                                </div>
                                <ul>
                                  <li>
                                    <a href="product.html">Default Layout </a>
                                  </li>
                                  <li>
                                    <a href="product-extended-layout.html">
                                      Extended Layout
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-full-width.html">
                                      Full Width Layout
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-grid-layout.html">
                                      Grid Images Layout
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-sticky-both.html">
                                      Sticky Both Side Info
                                      <span className="tip tip-hot">Hot!</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-sticky-info.html">
                                      Sticky Right Side Info
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* End .col-lg-4 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .col-lg-8 */}
                          <div className="col-lg-4">
                            <div className="banner">
                              <a href="#/">
                                <img
                                  src="assets/images/menu-banner.jpg"
                                  alt="Menu banner"
                                  className="product-promo"
                                />
                              </a>
                            </div>
                            {/* End .banner */}
                          </div>
                          {/* End .col-lg-4 */}
                        </div>
                        {/* End .row */}
                      </div>
                      {/* End .megamenu */}
                    </li>
                    <li>
                      <a href="#/" className="sf-with-ul">
                        Pages
                      </a>

                      <ul>
                        <li>
                          <a href="cart.html">Shopping Cart </a>
                        </li>
                        <li>
                          <a href="#/">Checkout </a>
                          <ul>
                            <li>
                              <a href="checkout-shipping.html">
                                Checkout Shipping
                              </a>
                            </li>
                            <li>
                              <a href="checkout-shipping-2.html">
                                Checkout Shipping 2
                              </a>
                            </li>
                            <li>
                              <a href="checkout-review.html">
                                Checkout Review{" "}
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#/">Dashboard </a>
                          <ul>
                            <li>
                              <a href="dashboard.html">Dashboard </a>
                            </li>
                            <li>
                              <a href="my-account.html">My Account </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="about.html">About Us </a>
                        </li>
                        <li>
                          <a href="#/">Blog </a>
                          <ul>
                            <li>
                              <a href="blog.html">Blog </a>
                            </li>
                            <li>
                              <a href="single.html">Blog Post </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us </a>
                        </li>
                        <li>
                          <a href="#/" className="login-link">
                            Login
                          </a>
                        </li>
                        <li>
                          <a href="forgot-password.html">Forgot Password </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#/" className="sf-with-ul">
                        Features
                      </a>
                      <ul>
                        <li>
                          <a href="#/">Header Types </a>
                        </li>
                        <li>
                          <a href="#/">Footer Types </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* End .header-bottom */}
            </div>
            {/* End .header-bottom */}
          </div>{" "}
          <div className="mobile-menu-container">
            <div className="mobile-menu-wrapper">
              <span className="mobile-menu-close">
                <i className="icon-retweet"></i>
              </span>
              <nav className="mobile-nav">
                <ul className="mobile-menu">
                  <li className="active">
                    <a href="#/">Home </a>
                  </li>
                  <li>
                    <a href="category.html">Categories </a>
                    <ul>
                      <li>
                        <a href="category.html">Full Width Banner </a>
                      </li>
                      <li>
                        <a href="category-banner-boxed-slider.html">
                          Boxed Slider Banner
                        </a>
                      </li>
                      <li>
                        <a href="category-banner-boxed-image.html">
                          Boxed Image Banner
                        </a>
                      </li>
                      <li>
                        <a href="category.html">Left Sidebar </a>
                      </li>
                      <li>
                        <a href="category-sidebar-right.html">Right Sidebar </a>
                      </li>
                      <li>
                        <a href="category-flex-grid.html">Product Flex Grid </a>
                      </li>
                      <li>
                        <a href="category-horizontal-filter1.html">
                          Horizontal Filter 1
                        </a>
                      </li>
                      <li>
                        <a href="category-horizontal-filter2.html">
                          Horizontal Filter 2
                        </a>
                      </li>
                      <li>
                        <a href="#/">Product List Item Types </a>
                      </li>
                      <li>
                        <a href="category-infinite-scroll.html">
                          Ajax Infinite Scroll
                          <span className="tip tip-new">New</span>
                        </a>
                      </li>
                      <li>
                        <a href="category-3col.html">3 Columns Products </a>
                      </li>
                      <li>
                        <a href="category.html">4 Columns Products </a>
                      </li>
                      <li>
                        <a href="category-5col.html">5 Columns Products </a>
                      </li>
                      <li>
                        <a href="category-6col.html">6 Columns Products </a>
                      </li>
                      <li>
                        <a href="category-7col.html">7 Columns Products </a>
                      </li>
                      <li>
                        <a href="category-8col.html">8 Columns Products </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="product.html">Products </a>
                    <ul>
                      <li>
                        <a href="#/">Variations </a>
                        <ul>
                          <li>
                            <a href="product.html">Horizontal Thumbnails </a>
                          </li>
                          <li>
                            <a href="product-full-width.html">
                              Vertical Thumbnails
                              <span className="tip tip-hot">Hot!</span>
                            </a>
                          </li>
                          <li>
                            <a href="product.html">Inner Zoom </a>
                          </li>
                          <li>
                            <a href="product-addcart-sticky.html">
                              Addtocart Sticky
                            </a>
                          </li>
                          <li>
                            <a href="product-sidebar-left.html">
                              Accordion Tabs
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#/">Variations </a>
                        <ul>
                          <li>
                            <a href="product-sticky-tab.html">Sticky Tabs </a>
                          </li>
                          <li>
                            <a href="product-simple.html">Simple Product </a>
                          </li>
                          <li>
                            <a href="product-sidebar-left.html">
                              With Left Sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#/">Product Layout Types </a>
                        <ul>
                          <li>
                            <a href="product.html">Default Layout </a>
                          </li>
                          <li>
                            <a href="product-extended-layout.html">
                              Extended Layout
                            </a>
                          </li>
                          <li>
                            <a href="product-full-width.html">
                              Full Width Layout
                            </a>
                          </li>
                          <li>
                            <a href="product-grid-layout.html">
                              Grid Images Layout
                            </a>
                          </li>
                          <li>
                            <a href="product-sticky-both.html">
                              Sticky Both Side Info
                              <span className="tip tip-hot">Hot!</span>
                            </a>
                          </li>
                          <li>
                            <a href="product-sticky-info.html">
                              Sticky Right Side Info
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#/">
                      Pages<span className="tip tip-hot">Hot!</span>
                    </a>
                    <ul>
                      <li>
                        <a href="cart.html">Shopping Cart </a>
                      </li>
                      <li>
                        <a href="#/">Checkout </a>
                        <ul>
                          <li>
                            <a href="checkout-shipping.html">
                              Checkout Shipping
                            </a>
                          </li>
                          <li>
                            <a href="checkout-shipping-2.html">
                              Checkout Shipping 2
                            </a>
                          </li>
                          <li>
                            <a href="checkout-review.html">Checkout Review </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">About </a>
                      </li>
                      <li>
                        <a href="#/" className="login-link">
                          Login
                        </a>
                      </li>
                      <li>
                        <a href="forgot-password.html">Forgot Password </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html">Blog </a>
                    <ul>
                      <li>
                        <a href="single.html">Blog Post </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              {/* End .mobile-nav */}

              <div className="social-icons">
                <a href="#/" className="social-icon" target="_blank">
                  <i className="icon-facebook"></i>
                </a>
                <a href="#/" className="social-icon" target="_blank">
                  <i className="icon-twitter"></i>
                </a>
                <a href="#/" className="social-icon" target="_blank">
                  <i className="icon-instagram"></i>
                </a>
              </div>
              {/* End .social-icons */}
            </div>
            {/* End .mobile-menu-wrapper */}
          </div>
          {/* End .mobile-menu-container */}
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
