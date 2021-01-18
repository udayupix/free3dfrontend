import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Mobileview from "./Mobileview";
import { Link } from "react-router-dom";

class Singlepost extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        
          <div className="page-wrapper">
            <Header />
            <main className="main">
              <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="#/">Electronics</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Headsets
                    </li>
                  </ol>
                </div>
                {/* End .container */}
              </nav>
              <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="product-single-container product-single-default">
                            <div className="row">
                                <div className="col-lg-7 col-md-6 product-single-gallery">
                                    <div className="product-slider-container product-item">
                                        <div className="product-single-carousel owl-carousel owl-theme">
                                            <div className="product-item">
                                                <img className="product-single-image" src="assets/images/products/zoom/product-1.jpg"  alt="ss"  data-zoom-image="assets/images/products/zoom/product-1-big.jpg"/>
                                            </div>
                                            <div className="product-item">
                                                <img className="product-single-image" src="assets/images/products/zoom/product-2.jpg" alt="ss" data-zoom-image="assets/images/products/zoom/product-2-big.jpg"/>
                                            </div>
                                            <div className="product-item">
                                                <img className="product-single-image" src="assets/images/products/zoom/product-3.jpg" alt="ss" data-zoom-image="assets/images/products/zoom/product-3-big.jpg"/>
                                            </div>
                                            <div className="product-item">
                                                <img className="product-single-image" src="assets/images/products/zoom/product-4.jpg" alt="ss" data-zoom-image="assets/images/products/zoom/product-4-big.jpg"/>
                                            </div>
                                        </div>
                                        {/* End .product-single-carousel */}
                                        <span className="prod-full-screen">
                                            <i className="icon-plus"></i>
                                        </span>
                                    </div>
                                    <div className="prod-thumbnail row owl-dots" id='carousel-custom-dots'>
                                        <div className="col-3 owl-dot">
                                            <img src="assets/images/products/zoom/product-1.jpg" alt="ss"/>
                                        </div>
                                        <div className="col-3 owl-dot">
                                            <img src="assets/images/products/zoom/product-2.jpg" alt="ss" />
                                        </div>
                                        <div className="col-3 owl-dot">
                                            <img src="assets/images/products/zoom/product-3.jpg" alt="ss" />
                                        </div>
                                        <div className="col-3 owl-dot">
                                            <img src="assets/images/products/zoom/product-4.jpg" alt="ss" />
                                        </div>
                                    </div>
                                </div>{/* End .col-lg-7 */}

                                <div className="col-lg-5 col-md-6">
                                    <div className="product-single-details">
                                        <h1 className="product-title">Silver Porto Headset</h1>

                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings"  style={{width:"60%"}} ></span>{/* End .ratings */}
                                            </div>{/* End .product-ratings */}

                                            <Link to="#/" className="rating-link">( 6 Reviews )</Link>
                                        </div>{/* End .product-container */}

                                        <div className="price-box">
                                            <span className="old-price">$81.00</span>
                                            <span className="product-price">$101.00</span>
                                        </div>{/* End .price-box */}

                                        <div className="product-desc">
                                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>
                                        </div>{/* End .product-desc */}

                                        <div className="product-filters-container">
                                            <div className="product-single-filter">
                                                <label>Colors:</label>
                                                <ul className="config-swatch-list">
                                                    <li className="active">
                                                        <Link to="#/"   style={{backgroundColor:"#6085a5"}} >{""}</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#/"  style={{backgroundColor:"#ab6e6e"}}>{""}</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#/"  style={{backgroundColor:" #b19970"}}>{""}</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#/"  style={{backgroundColor:" #11426b"}}>{""}</Link>
                                                    </li>
                                                </ul>
                                            </div>{/* End .product-single-filter */}
                                        </div>{/* End .product-filters-container */}

                                        <div className="product-action product-all-icons">
                                            <div className="product-single-qty">
                                                <input className="horizontal-quantity form-control" type="text"/>
                                            </div>{/* End .product-single-qty */}

                                            <Link to="cart.html" className="paction add-cart" title="Add to Cart">
                                                <span>Add to Cart</span>
                                            </Link>
                                            <Link to="#/" className="paction add-wishlist" title="Add to Wishlist">
                                                <span>Add to Wishlist</span>
                                            </Link>
                                            <Link to="#/" className="paction add-compare" title="Add to Compare">
                                                <span>Add to Compare</span>
                                            </Link>
                                        </div>{/* End .product-action */}

                                        <div className="product-single-share">
                                            <label>Share:</label>
                                            {/* www.addthis.com share plugin*/}
                                            <div className="addthis_inline_share_toolbox"></div>
                                        </div>{/* End .product single-share */}
                                    </div>{/* End .product-single-details */}
                                </div>{/* End .col-lg-5 */}
                            </div>{/* End .row */}
                        </div>{/* End .product-single-container */}

                        <div className="product-single-tabs">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <Link className="nav-link active" id="product-tab-desc" data-toggle="tab" to="#product-desc-content" role="tab" aria-controls="product-desc-content" aria-selected="true">Description</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="product-tab-tags" data-toggle="tab" to="#product-tags-content" role="tab" aria-controls="product-tags-content" aria-selected="false">Tags</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="product-tab-reviews" data-toggle="tab" to="#product-reviews-content" role="tab" aria-controls="product-reviews-content" aria-selected="false">Reviews</Link>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="product-desc-content" role="tabpanel" aria-labelledby="product-tab-desc">
                                    <div className="product-desc-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                                        <ul>
                                            <li><i className="icon-ok"></i>Any Product types that You want - Simple, Configurable</li>
                                            <li><i className="icon-ok"></i>Downloadable/Digital Products, Virtual Products</li>
                                            <li><i className="icon-ok"></i>Inventory Management with Backordered items</li>
                                        </ul>
                                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br/>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                    </div>{/* End .product-desc-content */}
                                </div>{/* End .tab-pane */}

                                <div className="tab-pane fade" id="product-tags-content" role="tabpanel" aria-labelledby="product-tab-tags">
                                    <div className="product-tags-content">
                                        <form action="#/">
                                            <h4>Add Your Tags:</h4>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-sm" required/>
                                                <input type="submit" className="btn btn-primary" value="Add Tags"/>
                                            </div>{/* End .form-group */}
                                        </form>
                                        <p className="note">Use spaces to separate tags. Use single quotes (') for phrases.</p>
                                    </div>{/* End .product-tags-content */}
                                </div>{/* End .tab-pane */}

                                <div className="tab-pane fade" id="product-reviews-content" role="tabpanel" aria-labelledby="product-tab-reviews">
                                    <div className="product-reviews-content">
                                        <div className="collateral-box">
                                            <ul>
                                                <li>Be the first to review this product</li>
                                            </ul>
                                        </div>{/* End .collateral-box */}

                                        <div className="add-product-review">
                                            <h3 className="text-uppercase heading-text-color font-weight-semibold">WRITE YOUR OWN REVIEW</h3>
                                            <p>How do you rate this product? *</p>

                                            <form action="#/">
                                                <table className="ratings-table">
                                                    <thead>
                                                        <tr>
                                                            <th>&nbsp;</th>
                                                            <th>1 star</th>
                                                            <th>2 stars</th>
                                                            <th>3 stars</th>
                                                            <th>4 stars</th>
                                                            <th>5 stars</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Quality</td>
                                                            <td>
                                                                <input type="radio" name="ratings[1]" id="Quality_1" value="1" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="ratings[1]" id="Quality_2" value="2" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="ratings[1]" id="Quality_3" value="3" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="ratings[1]" id="Quality_4" value="4" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="ratings[1]" id="Quality_5" value="5" className="radio"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Value</td>
                                                            <td>
                                                                <input type="radio" name="value[1]" id="Value_1" value="1" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="value[1]" id="Value_2" value="2" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="value[1]" id="Value_3" value="3" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="value[1]" id="Value_4" value="4" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="value[1]" id="Value_5" value="5" className="radio"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Price</td>
                                                            <td>
                                                                <input type="radio" name="price[1]" id="Price_1" value="1" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="price[1]" id="Price_2" value="2" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="price[1]" id="Price_3" value="3" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="price[1]" id="Price_4" value="4" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="price[1]" id="Price_5" value="5" className="radio"/>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <div className="form-group">
                                                    <label>Nickname <span className="required">*</span></label>
                                                    <input type="text" className="form-control form-control-sm" required/>
                                                </div>{/* End .form-group */}
                                                <div className="form-group">
                                                    <label>Summary of Your Review <span className="required">*</span></label>
                                                    <input type="text" className="form-control form-control-sm" required/>
                                                </div>{/* End .form-group */}
                                                <div className="form-group mb-2">
                                                    <label>Review <span className="required">*</span></label>
                                                    <textarea cols="5" rows="6" className="form-control form-control-sm"></textarea>
                                                </div>{/* End .form-group */}

                                                <input type="submit" className="btn btn-primary" value="Submit Review"/>
                                            </form>
                                        </div>{/* End .add-product-review */}
                                    </div>{/* End .product-reviews-content */}
                                </div>{/* End .tab-pane */}
                            </div>{/* End .tab-content */}
                        </div>{/* End .product-single-tabs */}
                    </div>{/* End .col-lg-9 */}

                    <div className="sidebar-overlay"></div>
                    <div className="sidebar-toggle"><i className="icon-sliders"></i></div>
                    <aside className="sidebar-product col-lg-3 padding-left-lg mobile-sidebar">
                        <div className="sidebar-wrapper">
                            <div className="widget widget-brand">
                                <Link to="#/">
                                    <img src="assets/images/product-brand.png" alt="brand name"/>
                                </Link>
                            </div>{/* End .widget */}

                            <div className="widget widget-info">
                                <ul>
                                    <li>
                                        <i className="icon-shipping"></i>
                                        <h4>FREE<br/>SHIPPING</h4>
                                    </li>
                                    <li>
                                        <i className="icon-us-dollar"></i>
                                        <h4>100% MONEY<br/>BACK GUARANTEE</h4>
                                    </li>
                                    <li>
                                        <i className="icon-online-support"></i>
                                        <h4>ONLINE<br/>SUPPORT 24/7</h4>
                                    </li>
                                </ul>
                            </div>{/* End .widget */}

                            <div className="widget widget-banner">
                                <div className="banner banner-image">
                                    <Link to="#/">
                                        <img src="assets/images/banners/banner-sidebar.jpg" alt="Banner Desc" />
                                    </Link>
                                </div>{/* End .banner */}
                            </div>{/* End .widget */}
                            <div className="widget widget-featured">
                                <h3 className="widget-title">Featured Products</h3>
                                
                                <div className="widget-body">
                                    <div className="owl-carousel widget-featured-products" data-toggle="owl" data-owl-options="{
                                        'lazyLoad': true,
                                        'nav': true,
                                        'dots': false,
                                        'autoHeight': true
                                    }">
                                        <div className="featured-col">
                                            <div className="product-default left-details product-widget">
                                                <figure>
                                                    <Link to="product.html">
                                                        <img src="assets/images/products/product-1.jpg" alt="ss"  />
                                                    </Link>
                                                </figure>
                                                <div className="product-details">
                                                    <h2 className="product-title">
                                                        <Link to="product.html">Woo Album #2</Link>
                                                    </h2>
                                                    <div className="ratings-container">
                                                        <div className="product-ratings">
                                                            <span className="ratings" style={{width:"0%"}}></span>{/* End .ratings */}
                                                            <span className="tooltiptext tooltip-top"></span>
                                                        </div>{/* End .product-ratings */}
                                                    </div>{/* End .product-container */}
                                                    <div className="price-box">
                                                        <span className="product-price">$9.00</span>
                                                    </div>{/* End .price-box */}
                                                </div>{/* End .product-details */}
                                            </div>
                                            <div className="product-default left-details product-widget">
                                                <figure>
                                                    <Link to="product.html">
                                                        <img src="assets/images/products/product-2.jpg" alt="ss"  />
                                                    </Link>
                                                </figure>
                                                <div className="product-details">
                                                    <h2 className="product-title">
                                                        <Link to="product.html">Luxury bag</Link>
                                                    </h2>
                                                    <div className="ratings-container">
                                                        <div className="product-ratings">
                                                            <span className="ratings" style={{"width":"0%"}}></span>{/* End .ratings */}
                                                            <span className="tooltiptext tooltip-top"></span>
                                                        </div>{/* End .product-ratings */}
                                                    </div>{/* End .product-container */}
                                                    <div className="price-box">
                                                        <span className="product-price">$350.00</span>
                                                    </div>{/* End .price-box */}
                                                </div>{/* End .product-details */}
                                            </div>
                                            <div className="product-default left-details product-widget">
                                                <figure>
                                                    <Link to="product.html">
                                                        <img src="assets/images/products/product-3.jpg" alt="ss"  />
                                                    </Link>
                                                </figure>
                                                <div className="product-details">
                                                    <h2 className="product-title">
                                                        <Link to="product.html">Patient Ninja</Link>
                                                    </h2>
                                                    <div className="ratings-container">
                                                        <div className="product-ratings">
                                                            <span className="ratings" style={{width:"0%"}}></span>{/* End .ratings */}
                                                            <span className="tooltiptext tooltip-top"></span>
                                                        </div>{/* End .product-ratings */}
                                                    </div>{/* End .product-container */}
                                                    <div className="price-box">
                                                        <span className="old-price">$35.00</span>
                                                        <span className="product-price">$30.00</span>
                                                    </div>{/* End .price-box */}
                                                </div>{/* End .product-details */}
                                            </div>
                                        </div>{/* End .featured-col */}

                                        <div className="featured-col">
                                            <div className="product-default left-details product-widget">
                                                <figure>
                                                    <Link to="product.html">
                                                        <img src="assets/images/products/product-4.jpg" alt="ss"  />
                                                    </Link>
                                                </figure>
                                                <div className="product-details">
                                                    <h2 className="product-title">
                                                        <Link to="product.html">Woo Album #2</Link>
                                                    </h2>
                                                    <div className="ratings-container">
                                                        <div className="product-ratings">
                                                            <span className="ratings" style={{width:"0%"}}></span>{/* End .ratings */}
                                                            <span className="tooltiptext tooltip-top"></span>
                                                        </div>{/* End .product-ratings */}
                                                    </div>{/* End .product-container */}
                                                    <div className="price-box">
                                                        <span className="product-price">$9.00</span>
                                                    </div>{/* End .price-box */}
                                                </div>{/* End .product-details */}
                                            </div>
                                            <div className="product-default left-details product-widget">
                                                <figure>
                                                    <Link to="product.html">
                                                        <img src="assets/images/products/product-5.jpg"alt="ss"  />
                                                    </Link>
                                                </figure>
                                                <div className="product-details">
                                                    <h2 className="product-title">
                                                        <Link to="product.html">Luxury bag</Link>
                                                    </h2>
                                                    <div className="ratings-container">
                                                        <div className="product-ratings">
                                                            <span className="ratings" style={{width:"0%"}}></span>{/* End .ratings */}
                                                            <span className="tooltiptext tooltip-top"></span>
                                                        </div>{/* End .product-ratings */}
                                                    </div>{/* End .product-container */}
                                                    <div className="price-box">
                                                        <span className="product-price">$350.00</span>
                                                    </div>{/* End .price-box */}
                                                </div>{/* End .product-details */}
                                            </div>
                                            <div className="product-default left-details product-widget">
                                                <figure>
                                                    <Link to="product.html">
                                                        <img src="assets/images/products/product-6.jpg" alt="ss"  />
                                                    </Link>
                                                </figure>
                                                <div className="product-details">
                                                    <h2 className="product-title">
                                                        <Link to="product.html">Patient Ninja</Link>
                                                    </h2>
                                                    <div className="ratings-container">
                                                        <div className="product-ratings">
                                                            <span className="ratings" style={{width:"0%"}}></span>{/* End .ratings */}
                                                            <span className="tooltiptext tooltip-top"></span>
                                                        </div>{/* End .product-ratings */}
                                                    </div>{/* End .product-container */}
                                                    <div className="price-box">
                                                        <span className="old-price">$35.00</span>
                                                        <span className="product-price">$30.00</span>
                                                    </div>{/* End .price-box */}
                                                </div>{/* End .product-details */}
                                            </div>
                                        </div>{/* End .featured-col */}
                                    </div>{/* End .widget-featured-slider */}
                                </div>{/* End .widget-body */}
                            </div>{/* End .widget */}
                        </div>
                    </aside>{/* End .col-md-3 */}
                </div>{/* End .row */}
            </div>{/* End .container */}
            <div className="featured-section">
                <div className="container">
                    <h2 className="carousel-title">Featured Products</h2>

                    <div className="featured-products owl-carousel owl-theme mb-2">
                        <div className="product-default inner-quickview inner-icon">
                            <figure>
                                <Link to="product.html">
                                    <img src="assets/images/products/product-1.jpg" alt="ss" />
                                </Link>
                                <div className="btn-icon-group">
                                    <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag"></i></button>
                                </div>
                                <Link to="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</Link> 
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <Link to="category.html" className="product-category">category</Link>
                                    </div>
                                    <Link to="#/" className="btn-icon-wish"><i className="icon-heart"></i></Link>
                                </div>
                                <h2 className="product-title">
                                    <Link to="product.html">Product Short Name</Link>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{width:"100%"}}></span>{/* End .ratings */}
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="product-price">$49.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                        <div className="product-default inner-quickview inner-icon">
                            <figure>
                                <Link to="product.html">
                                    <img src="assets/images/products/product-2.jpg" alt="ss" />
                                </Link>
                                <div className="btn-icon-group">
                                    <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag"></i></button>
                                </div>
                                <Link to="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</Link> 
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <Link to="category.html" className="product-category">category</Link>
                                    </div>
                                    <Link to="#/" className="btn-icon-wish"><i className="icon-heart"></i></Link>
                                </div>
                                <h2 className="product-title">
                                    <Link to="product.html">Product Short Name</Link>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{width:"100%"}}></span>{/* End .ratings */}
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="product-price">$49.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                        <div className="product-default inner-quickview inner-icon">
                            <figure>
                                <Link to="product.html">
                                    <img src="assets/images/products/product-3.jpg" alt="ss" />
                                </Link>
                                <div className="btn-icon-group">
                                    <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag"></i></button>
                                </div>
                                <Link to="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</Link> 
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <Link to="category.html" className="product-category">category</Link>
                                    </div>
                                    <Link to="#/" className="btn-icon-wish"><i className="icon-heart"></i></Link>
                                </div>
                                <h2 className="product-title">
                                    <Link to="product.html">Product Short Name</Link>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{width:"100%"}}></span>{/* End .ratings */}
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="product-price">$49.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                        <div className="product-default inner-quickview inner-icon">
                            <figure>
                                <Link to="product.html">
                                    <img src="assets/images/products/product-4.jpg" alt="ss" />
                                </Link>
                                <div className="btn-icon-group">
                                    <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag"></i></button>
                                </div>
                                <Link to="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</Link> 
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <Link to="category.html" className="product-category">category</Link>
                                    </div>
                                    <Link to="#/" className="btn-icon-wish"><i className="icon-heart"></i></Link>
                                </div>
                                <h2 className="product-title">
                                    <Link to="product.html">Product Short Name</Link>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{width:"100%"}}></span>{/* End .ratings */}
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="product-price">$49.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                        <div className="product-default inner-quickview inner-icon">
                            <figure>
                                <Link to="product.html">
                                    <img src="assets/images/products/product-5.jpg" alt="ss" />
                                </Link>
                                <div className="btn-icon-group">
                                    <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag"></i></button>
                                </div>
                                <Link to="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</Link> 
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <Link to="category.html" className="product-category">category</Link>
                                    </div>
                                    <Link to="#/" className="btn-icon-wish"><i className="icon-heart"></i></Link>
                                </div>
                                <h2 className="product-title">
                                    <Link to="product.html">Product Short Name</Link>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{width:"100%"}}></span>{/* End .ratings */}
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="product-price">$49.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                        </div>
                    </div>{/* End .product-single-tabs */}
                </div>{/* End .container */}


            </main>
          
       
        <Footer />
        </div>
        
        <Mobileview/>
        
      </React.Fragment>
    );
  }
}

export default Singlepost;
