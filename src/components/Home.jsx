import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Mobileview from "./Mobileview";
import { Link } from "react-router-dom";
import posts from "../services/posts";

class Home extends Component {
  state = { catts: [] };
  async componentDidMount() {
    const { data } = await posts.cats();
    this.setState({ catts: data });
  }

  render() {
    const { catts } = this.state;
    return (
      <React.Fragment>
        <div className="page-wrapper">
          <Header />
          <main className="main home">
            <div className="home-top-container">
              <div className="home-slider owl-carousel owl-theme owl-carousel-lazy">
                <div
                  className="home-slide"
                  style={{
                    backgroundImage: "url('assets/images/slider/slide1.jpg')",
                  }}
                >
                  <img
                    className="owl-lazy"
                    src="assets/images/lazy.png"
                    alt="imss"
                  />
                  <div className="home-slide-content container">
                    <div>
                      <h2 className="home-slide-subtitle">
                        start the revolution
                      </h2>
                      <h1 className="home-slide-title">drone pro 4</h1>
                      <h2 className="home-slide-foot">
                        from <span>$499</span>
                      </h2>
                      <button className="btn btn-dark btn-buy">BUY NOW</button>
                    </div>
                  </div>
                  {/* End .home-slide-content */}
                </div>
                {/* End .home-slide */}

                <div
                  className="home-slide"
                  style={{
                    backgroundImage: "url('assets/images/slider/slide2.jpg')",
                  }}
                >
                  <img
                    className="owl-lazy"
                    src="assets/images/lazy.png"
                    alt="imss"
                  />
                  <div className="home-slide-content container">
                    <div>
                      <h2 className="home-slide-subtitle">amazing deals</h2>
                      <h1 className="home-slide-title">smartphone</h1>
                      <h2 className="home-slide-foot">
                        from <span>$199</span>
                      </h2>
                      <button className="btn btn-dark btn-buy">BUY NOW</button>
                    </div>
                  </div>
                  {/* End .home-slide-content */}
                </div>
                {/* End .home-slide */}

                <div
                  className="home-slide"
                  style={{
                    backgroundImage: "url('assets/images/slider/slide3.jpg')",
                  }}
                >
                  <img
                    className="owl-lazy"
                    src="assets/images/lazy.png"
                    alt="imss"
                  />
                  <div className="home-slide-content container">
                    <div>
                      <h2 className="home-slide-subtitle">
                        best price of the year
                      </h2>
                      <h1 className="home-slide-title">top accessories</h1>
                      <h2 className="home-slide-foot">
                        from <span>$19</span>
                      </h2>
                      <button className="btn btn-dark btn-buy">BUY NOW</button>
                    </div>
                  </div>
                  {/* End .home-slide-content */}
                </div>
                {/* End .home-slide */}
              </div>
              <div className="home-slider-sidebar">
                <ul>
                  <li className="active">Drones</li>
                  <li>Phones</li>
                  <li>Accessories</li>
                </ul>
              </div>
            </div>
            {/* End .home-slider */}
            <section
              className="categories-container"
              style={{ textAlign: "center" }}
            >
              <h2>Categories</h2> <br />
              <div
                className="container categories-carousel owl-carousel owl-theme"
                data-toggle="owl"
                data-owl-options="{
                    'loop' : true,
                    'margin': 30,
                    'nav': false,
                    'dots': true,
                
                    'autoHeight': true,
                    'responsive': {
                      '0': {
                        'items': 2,
                        'margin': 0
                      },
                      '576': {
                        'items': 3
                      },
                      '768': {
                        'items': 4
                      },
                      '992': {
                        'items': 5
                      },
                      '1200': {
                        'items': 6
                      }
                    }
                }"
              >
                <div className="category">
                  <i className="fas fa-building"></i>
                  <br />
                  <span>Fashion</span>
                </div>
                <div className="category">
                  <i className="icon-category-electronics"></i>
                  <span>{catts.name}</span>
                </div>
                <div className="category">
                  <i className="icon-gift"></i>
                  <span>Gift</span>
                </div>
                <div className="category">
                  <i className="icon-category-garden"></i>
                  <span>Garden</span>
                </div>
                <div className="category">
                  <i className="icon-category-music"></i>
                  <span>Music</span>
                </div>
                <div className="category">
                  <i className="icon-category-motors"></i>
                  <span>Motors</span>
                </div>
                <div className="category">
                  <i className="icon-category-fashion"></i>
                  <span>Fashion</span>
                </div>
                <div className="category">
                  <i className="icon-category-electronics"></i>
                  <span>Electronics</span>
                </div>
                <div className="category">
                  <i className="icon-gift"></i>
                  <span>Gift</span>
                </div>
                <div className="category">
                  <i className="icon-category-garden"></i>
                  <span>Garden</span>
                </div>
                <div className="category">
                  <i className="icon-category-music"></i>
                  <span>Music</span>
                </div>
                <div className="category">
                  <i className="icon-category-motors"></i>
                  <span>Motors</span>
                </div>
              </div>
              {/* End .categories-carousel */}
            </section>
            <br />
            <br />
            <section className="product-panel mt-5">
              <div className="container">
                <div className="section-title">
                  <h2>Featured Products</h2>
                </div>
                <div className="product-intro divide-line mt-2 mb-8">
                  <div className="col-6 col-lg-2 col-md-3 col-sm-4 product-default inner-quickview inner-icon">
                    <figure>
                      <Link to="product.html">
                        <img
                          src="assets/images/products/product-20.jpg"
                          alt="pogo"
                        />
                      </Link>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <Link
                        to="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </Link>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <Link to="category.html" className="product-category">
                            category
                          </Link>
                        </div>
                        <Link to="#/" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </Link>
                      </div>
                      <h2 className="product-title">
                        <Link to="product.html">Product Short Name</Link>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "0%" }}
                          ></span>
                          {/* End .ratings*/}
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                        {/* End .product-ratings*/}
                      </div>
                      {/* End .product-container*/}
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                      {/* End .price-box*/}
                    </div>
                    {/* End .product-details*/}
                  </div>
                  <div className="col-6 col-lg-2 col-md-3 col-sm-4 product-default inner-quickview inner-icon">
                    <figure>
                      <Link to="product.html">
                        <img
                          src="assets/images/products/product-1.jpg"
                          alt="ss"
                        />
                      </Link>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <Link
                        to="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </Link>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <Link to="category.html" className="product-category">
                            category
                          </Link>
                        </div>
                        <Link to="#/" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </Link>
                      </div>
                      <h2 className="product-title">
                        <Link to="product.html">Product Short Name</Link>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "0%" }}
                          ></span>
                          {/* End .ratings*/}
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                        {/* End .product-ratings*/}
                      </div>
                      {/* End .product-container*/}
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                      {/* End .price-box*/}
                    </div>
                    {/* End .product-details*/}
                  </div>
                  <div className="col-6 col-lg-2 col-md-3 col-sm-4 product-default inner-quickview inner-icon">
                    <figure>
                      <Link to="product.html">
                        <img
                          src="assets/images/products/product-3.jpg"
                          alt="ss"
                        />
                      </Link>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <Link
                        to="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </Link>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <Link to="category.html" className="product-category">
                            category
                          </Link>
                        </div>
                        <Link to="#/" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </Link>
                      </div>
                      <h2 className="product-title">
                        <Link to="product.html">Product Short Name</Link>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "0%" }}
                          ></span>
                          {/* End .ratings*/}
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                        {/* End .product-ratings*/}
                      </div>
                      {/* End .product-container*/}
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                      {/* End .price-box*/}
                    </div>
                    {/* End .product-details*/}
                  </div>
                  <div className="col-6 col-lg-2 col-md-3 col-sm-4 product-default inner-quickview inner-icon">
                    <figure>
                      <Link to="product.html">
                        <img
                          src="assets/images/products/product-4.jpg"
                          alt="ss"
                        />
                      </Link>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <Link
                        to="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </Link>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <Link to="category.html" className="product-category">
                            category
                          </Link>
                        </div>
                        <Link to="#/" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </Link>
                      </div>
                      <h2 className="product-title">
                        <Link to="product.html">Product Short Name</Link>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "0%" }}
                          ></span>
                          {/* End .ratings*/}
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                        {/* End .product-ratings*/}
                      </div>
                      {/* End .product-container*/}
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                      {/* End .price-box*/}
                    </div>
                    {/* End .product-details*/}
                  </div>
                  <div className="col-6 col-lg-2 col-md-3 col-sm-4 product-default inner-quickview inner-icon">
                    <figure>
                      <Link to="product.html">
                        <img
                          src="assets/images/products/product-5.jpg"
                          alt="ss"
                        />
                      </Link>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <Link
                        to="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </Link>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <Link to="category.html" className="product-category">
                            category
                          </Link>
                        </div>
                        <Link to="#/" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </Link>
                      </div>
                      <h2 className="product-title">
                        <Link to="product.html">Product Short Name</Link>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "0%" }}
                          ></span>
                          {/* End .ratings*/}
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                        {/* End .product-ratings*/}
                      </div>
                      {/* End .product-container*/}
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                      {/* End .price-box*/}
                    </div>
                    {/* End .product-details*/}
                  </div>
                  <div className="col-6 col-lg-2 col-md-3 col-sm-4 product-default inner-quickview inner-icon">
                    <figure>
                      <Link to="product.html">
                        <img
                          src="assets/images/products/product-6.jpg"
                          alt="ss"
                        />
                      </Link>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <Link
                        to="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </Link>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <Link to="category.html" className="product-category">
                            category
                          </Link>
                        </div>
                        <Link to="#/" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </Link>
                      </div>
                      <h2 className="product-title">
                        <Link to="product.html">Product Short Name</Link>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "0%" }}
                          ></span>
                          {/* End .ratings*/}
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                        {/* End .product-ratings*/}
                      </div>
                      {/* End .product-container*/}
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                      {/* End .price-box*/}
                    </div>
                    {/* End .product-details*/}
                  </div>
                </div>
              </div>
            </section>
            <section className="product-panel">
              <div className="container">
                <div className="section-title">
                  <h2>New Arrivals</h2>
                </div>
                <div className="product-intro divide-line mt-2 mb-8">
                  <div className="col-6 col-lg-2 col-md-3 col-sm-4 product-default inner-quickview inner-icon">
                    <figure>
                      <Link to="product.html">
                        <img
                          src="assets/images/products/product-7.jpg"
                          alt="ss"
                        />
                      </Link>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <Link
                        to="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </Link>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <Link to="category.html" className="product-category">
                            category
                          </Link>
                        </div>
                        <Link to="#/" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </Link>
                      </div>
                      <h2 className="product-title">
                        <Link to="product.html">Product Short Name</Link>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "0%" }}
                          ></span>
                          {/* End .ratings  */}
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                        {/* End .product-ratings  */}
                      </div>
                      {/* End .product-container  */}
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                      {/* End .price-box  */}
                    </div>
                    {/* End .product-details  */}
                  </div>
                  <div className="col-6 col-lg-2 col-md-3 col-sm-4 product-default inner-quickview inner-icon">
                    <figure>
                      <Link to="product.html">
                        <img
                          src="assets/images/products/product-8.jpg"
                          alt="ss"
                        />
                      </Link>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <Link
                        to="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </Link>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <Link to="category.html" className="product-category">
                            category
                          </Link>
                        </div>
                        <Link to="#/" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </Link>
                      </div>
                      <h2 className="product-title">
                        <Link to="product.html">Product Short Name</Link>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "0%" }}
                          ></span>
                          {/* End .ratings  */}
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                        {/* End .product-ratings  */}
                      </div>
                      {/* End .product-container  */}
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                      {/* End .price-box   */}
                    </div>
                    {/* End .product-details  */}
                  </div>
                  <div className="col-6 col-lg-2 col-md-3 col-sm-4 product-default inner-quickview inner-icon">
                    <figure>
                      <Link to="product.html">
                        <img
                          src="assets/images/products/product-9.jpg"
                          alt="ss"
                        />
                      </Link>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <Link
                        to="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </Link>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <Link to="category.html" className="product-category">
                            category
                          </Link>
                        </div>
                        <Link to="#/" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </Link>
                      </div>
                      <h2 className="product-title">
                        <Link to="product.html">Product Short Name</Link>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "0%" }}
                          ></span>
                          {/* End .ratings  */}
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                        {/* End .product-ratings  */}
                      </div>
                      {/* End .product-container  */}
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                      {/* End .price-box  */}
                    </div>
                    {/* End .product-details  */}
                  </div>
                  <div className="col-6 col-lg-2 col-md-3 col-sm-4 product-default inner-quickview inner-icon">
                    <figure>
                      <Link to="product.html">
                        <img
                          src="assets/images/products/product-10.jpg"
                          alt="ss"
                        />
                      </Link>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <Link
                        to="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </Link>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <Link to="category.html" className="product-category">
                            category
                          </Link>
                        </div>
                        <Link to="#/" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </Link>
                      </div>
                      <h2 className="product-title">
                        <Link to="product.html">Product Short Name</Link>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "0%" }}
                          ></span>
                          {/* End .ratings  */}
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                        {/* End .product-ratings  */}
                      </div>
                      {/* End .product-container  */}
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                      {/* End .price-box  */}
                    </div>
                    {/* End .product-details  */}
                  </div>
                  <div className="col-6 col-lg-2 col-md-3 col-sm-4 product-default inner-quickview inner-icon">
                    <figure>
                      <Link to="product.html">
                        <img
                          src="assets/images/products/product-11.jpg"
                          alt="ss"
                        />
                      </Link>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <Link
                        to="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </Link>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <Link to="category.html" className="product-category">
                            category
                          </Link>
                        </div>
                        <Link to="#/" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </Link>
                      </div>
                      <h2 className="product-title">
                        <Link to="product.html">Product Short Name</Link>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "0%" }}
                          ></span>
                          {/* End .ratings  */}
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                        {/* End .product-ratings  */}
                      </div>
                      {/* End .product-container  */}
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                      {/* End .price-box  */}
                    </div>
                    {/* End .product-details  */}
                  </div>
                  <div className="col-6 col-lg-2 col-md-3 col-sm-4 product-default inner-quickview inner-icon">
                    <figure>
                      <Link to="product.html">
                        <img
                          src="assets/images/products/product-12.jpg"
                          alt="ss"
                        />
                      </Link>
                      <div className="btn-icon-group">
                        <button
                          className="btn-icon btn-add-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                        >
                          <i className="icon-bag"></i>
                        </button>
                      </div>
                      <Link
                        to="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </Link>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <Link to="category.html" className="product-category">
                            category
                          </Link>
                        </div>
                        <Link to="#/" className="btn-icon-wish">
                          <i className="icon-heart"></i>
                        </Link>
                      </div>
                      <h2 className="product-title">
                        <Link to="product.html">Product Short Name</Link>
                      </h2>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span
                            className="ratings"
                            style={{ width: "0%" }}
                          ></span>
                          {/* End .ratings  */}
                          <span className="tooltiptext tooltip-top">0</span>
                        </div>
                        {/* End .product-ratings  */}
                      </div>
                      {/* End .product-container  */}
                      <div className="price-box">
                        <span className="old-price">$59.00</span>
                        <span className="product-price">$49.00</span>
                      </div>
                      {/* End .price-box  */}
                    </div>
                    {/* End .product-details  */}
                  </div>
                </div>
              </div>
            </section>
          </main>

          <Footer />
        </div>
        <Mobileview />
      </React.Fragment>
    );
  }
}

export default Home;
