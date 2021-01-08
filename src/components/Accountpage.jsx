import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Mobileview from "./Mobileview";
import { Link } from "react-router-dom";

class Accountpage extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <body>
          <div className="page-wrapper">
            <Header />
            <main className="main">
              <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
                    </li>
                  </ol>
                </div>
              </nav>
              <div className="container">
                <div className="row">
                  <div className="col-lg-9 order-lg-last dashboard-content">
                    <h2>Edit Account Information</h2>

                    <form action="#/">
                      <div className="row">
                        <div className="col-sm-11">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="form-group required-field">
                                <label for="acc-name">First Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="acc-name"
                                  name="acc-name"
                                  required
                                />
                              </div>
                              {/* End .form-group */}
                            </div>
                            {/* End .col-md-4 */}

                            <div className="col-md-4">
                              <div className="form-group">
                                <label for="acc-mname">First Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="acc-mname"
                                  name="acc-mname"
                                />
                              </div>
                              {/* End .form-group */}
                            </div>
                            {/* End .col-md-4 */}

                            <div className="col-md-4">
                              <div className="form-group required-field">
                                <label for="acc-lastname">Last Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="acc-lastname"
                                  name="acc-lastname"
                                  required
                                />
                              </div>
                              {/* End .form-group */}
                            </div>
                            {/* End .col-md-4 */}
                          </div>
                          {/* End .row */}
                        </div>
                        {/* End .col-sm-11 */}
                      </div>
                      {/* End .row */}

                      <div className="form-group required-field">
                        <label for="acc-email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="acc-email"
                          name="acc-email"
                          required
                        />
                      </div>
                      {/* End .form-group */}

                      <div className="form-group required-field">
                        <label for="acc-password">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="acc-password"
                          name="acc-password"
                          required
                        />
                      </div>
                      {/* End .form-group */}

                      <div className="mb-2"></div>
                      {/* margin */}

                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="change-pass-checkbox"
                          value="1"
                        />
                        <label
                          className="custom-control-label"
                          for="change-pass-checkbox"
                        >
                          Change Password
                        </label>
                      </div>
                      {/* End .custom-checkbox */}

                      <div id="account-chage-pass">
                        <h3 className="mb-2">Change Password</h3>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group required-field">
                              <label for="acc-pass2">Password</label>
                              <input
                                type="password"
                                className="form-control"
                                id="acc-pass2"
                                name="acc-pass2"
                              />
                            </div>
                            {/* End .form-group */}
                          </div>
                          {/* End .col-md-6 */}

                          <div className="col-md-6">
                            <div className="form-group required-field">
                              <label for="acc-pass3">Confirm Password</label>
                              <input
                                type="password"
                                className="form-control"
                                id="acc-pass3"
                                name="acc-pass3"
                              />
                            </div>
                            {/* End .form-group */}
                          </div>
                          {/* End .col-md-6 */}
                        </div>
                        {/* End .row */}
                      </div>
                      {/* End #account-chage-pass */}

                      <div className="required text-right">
                        * Required Field
                      </div>
                      <div className="form-footer">
                        <Link to="#/">
                          <i className="icon-angle-double-left"></i>Back
                        </Link>

                        <div className="form-footer-right">
                          <button type="submit" className="btn btn-primary">
                            Save
                          </button>
                        </div>
                      </div>
                      {/* End .form-footer */}
                    </form>
                  </div>
                  {/* End .col-lg-9 */}

                  <aside className="sidebar col-lg-3">
                    <div className="widget widget-dashboard">
                      <h3 className="widget-title">My Account</h3>

                      <ul className="list">
                        <li className="active">
                          <Link to="#/">Account Dashboard </Link>
                        </li>
                        <li>
                          <Link to="#/">Account Information </Link>
                        </li>
                        <li>
                          <Link to="#/">Address Book </Link>
                        </li>
                        <li>
                          <Link to="#/">My Orders </Link>
                        </li>
                        <li>
                          <Link to="#/">Billing Agreements </Link>
                        </li>
                        <li>
                          <Link to="#/">Recurring Profiles </Link>
                        </li>
                        <li>
                          <Link to="#/">My Product Reviews </Link>
                        </li>
                        <li>
                          <Link to="#/">My Tags </Link>
                        </li>
                        <li>
                          <Link to="#/">My Wishlist </Link>
                        </li>
                        <li>
                          <Link to="#/">My Applications </Link>
                        </li>
                        <li>
                          <Link to="#/">Newsletter Subscriptions </Link>
                        </li>
                        <li>
                          <Link to="#/">My Downloadable Products </Link>
                        </li>
                      </ul>
                    </div>
                    {/* End .widget */}
                  </aside>
                  {/* End .col-lg-3 */}
                </div>
                {/* End .row */}
              </div>
              {/* End .container */}
              <div className="mb-5"></div>
            </main>
            <Footer />
          </div>

          <Mobileview />
        </body>
      </React.Fragment>
    );
  }
}

export default Accountpage;
