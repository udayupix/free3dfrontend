import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Mobileview from "./Mobileview";
import { Link } from "react-router-dom";

class Forgotpass extends Component {
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
                     
                      <Link to="/">Home </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Forgot Password
                    </li>
                  </ol>
                </div>
                {/* End .container */}
              </nav>

              <div className="container mt-4">
                <div className="heading mb-4">
                  <h2 className="title">Reset Password</h2>
                  <p>
                    Please enter your email address below to receive a password
                    reset link.
                  </p>
                </div>
                {/* End .heading */}

                <form action="#">
                  <div className="form-group required-field">
                    <label for="reset-email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="reset-email"
                      name="reset-email"
                      required
                    />
                  </div>
                  {/* End .form-group */}

                  <div className="form-footer">
                    <button type="submit" className="btn btn-primary">
                      Reset My Password
                    </button>
                  </div>
                  {/* End .form-footer */}
                </form>
              </div>
              {/* End .container */}

              <div className="mb-10"></div>
              {/* margin */}
            </main>

            <Footer />
          </div>
          <Mobileview />
       
      </React.Fragment>
    );
  }
}

export default Forgotpass;
