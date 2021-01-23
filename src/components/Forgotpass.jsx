import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Mobileview from "./Mobileview";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/Form";
import { toast } from "react-toastify";
import user from "../services/user";

class Forgotpass extends Form {
  state = { data: { username: "" }, errors: {} };

  schema = {
    username: Joi.string().required().label("Email"),
  };

  doSubmit = async () => {
    toast.configure();
    try {
      const { username } = this.state.data;
      const { data } = await user.forgotpass({ username });
      if (data) {
        toast.success(data);
        setTimeout(() => {
          window.location = "/";
        }, 2500);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data);
      }
    }
  };

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

              <form onSubmit={this.handleSubmit}>
                {/* <div className="form-group required-field">
                    <label for="reset-email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="reset-email"
                      name="reset-email"
                      required
                    />
                  </div> */}
                {this.renderInput("username", "Email")}
                {/* End .form-group */}

                <div className="form-footer">
                  {/* <button type="submit" className="btn btn-primary">
                      Reset My Password
                    </button> */}
                  {this.renderButton("FORGOT PASSWORD")}
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
