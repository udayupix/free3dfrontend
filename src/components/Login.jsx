import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Mobileview from "./Mobileview";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import Joi from "joi-browser";
import user from "../services/user";
import Form from "./common/Form";
import { toast } from "react-toastify";

class Login extends Form {
  state = { data: { username: "", password: "" }, errors: {} };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  responseGoogle = async (response) => {
    try {
      console.log(response.tokenId);
      console.log(response);
      const data = await user.glogin({ token: response.tokenId });

      if (data) {
        toast.success("Login Success");
        window.location = "/";
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data);
      }
    }
  };

  doSubmit = async () => {
    try {
      const { username, password } = this.state.data;
      const data = await user.login({ username, password });
      if (data) {
        toast.success("Login Success");
        window.location = "/";
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
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Login
                  </li>
                </ol>
              </div>
              {/* End .container */}
            </nav>

            <div className="container mt-12">
              <div className="heading mb-12">
                <h2 className="title">LOGIN</h2>
                <p>Please enter your deatils below.</p>
              </div>
              {/* End .heading */}

              <form className="form-group" onSubmit={this.handleSubmit}>
                <div className="form-group required-field">
                  {this.renderInput("username", "Username", "Enter Username")}
                  {this.renderInput(
                    "password",
                    "Password",
                    "Enter Password",
                    "password"
                  )}
                </div>
                {/* End .form-group */}

                {/* End .form-group */}

                <div className="form-footer" md>
                  {this.renderButton("Login")}
                  <br />
                  <button type="submit" className="btn btn-primary">
                    <Link to="/forgot">Forgot</Link>
                  </button>
                  <GoogleLogin
                    clientId="199839528587-4b6j9u96hh69huncn5r1ubs4nrdoud5a.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                  />
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

export default Login;
