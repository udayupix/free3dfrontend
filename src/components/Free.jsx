import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Mobileview from "./Mobileview";
import { Link } from "react-router-dom";

class Free extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="page-wrapper">
          <Header />
          <main className="main">
          
          <section className="product-panel mt-5">
            <div className="container">
              <div className="section-title">
                <h2>Free 3D Models</h2>
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
                        ></span>{" "}
                        {/* End .ratings  */}
                        <span className="tooltiptext tooltip-top">0</span>
                      </div>{" "}
                      {/* End .product-ratings  */}
                    </div>{" "}
                    {/* End .product-container  */}
                    <div className="price-box">
                      <span className="old-price">$59.00</span>
                      <span className="product-price">$49.00</span>
                    </div>{" "}
                    {/* End .price-box  */}
                  </div>{" "}
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
                        ></span>{" "}
                        {/* End .ratings  */}
                        <span className="tooltiptext tooltip-top">0</span>
                      </div>{" "}
                      {/* End .product-ratings  */}
                    </div>{" "}
                    {/* End .product-container  */}
                    <div className="price-box">
                      <span className="old-price">$59.00</span>
                      <span className="product-price">$49.00</span>
                    </div>{" "}
                    {/* End .price-box   */}
                  </div>{" "}
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
                        ></span>{" "}
                        {/* End .ratings  */}
                        <span className="tooltiptext tooltip-top">0</span>
                      </div>{" "}
                      {/* End .product-ratings  */}
                    </div>{" "}
                    {/* End .product-container  */}
                    <div className="price-box">
                      <span className="old-price">$59.00</span>
                      <span className="product-price">$49.00</span>
                    </div>{" "}
                    {/* End .price-box  */}
                  </div>{" "}
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
                        ></span>{" "}
                        {/* End .ratings  */}
                        <span className="tooltiptext tooltip-top">0</span>
                      </div>{" "}
                      {/* End .product-ratings  */}
                    </div>{" "}
                    {/* End .product-container  */}
                    <div className="price-box">
                      <span className="old-price">$59.00</span>
                      <span className="product-price">$49.00</span>
                    </div>{" "}
                    {/* End .price-box  */}
                  </div>{" "}
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
                        ></span>{" "}
                        {/* End .ratings  */}
                        <span className="tooltiptext tooltip-top">0</span>
                      </div>{" "}
                      {/* End .product-ratings  */}
                    </div>{" "}
                    {/* End .product-container  */}
                    <div className="price-box">
                      <span className="old-price">$59.00</span>
                      <span className="product-price">$49.00</span>
                    </div>{" "}
                    {/* End .price-box  */}
                  </div>{" "}
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
                        ></span>{" "}
                        {/* End .ratings  */}
                        <span className="tooltiptext tooltip-top">0</span>
                      </div>{" "}
                      {/* End .product-ratings  */}
                    </div>{" "}
                    {/* End .product-container  */}
                    <div className="price-box">
                      <span className="old-price">$59.00</span>
                      <span className="product-price">$49.00</span>
                    </div>{" "}
                    {/* End .price-box  */}
                  </div>{" "}
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

export default Free;
