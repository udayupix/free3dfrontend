import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Mobileview from "./Mobileview";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import user from "../services/user";
import Form from "./common/Form";
import { toast } from "react-toastify";

class Signup extends Form {
    state = { data: { email: "",username:"", password: "",confirmpass:""}, errors: {} };
  schema = {
    email: Joi.string().email().required().label("Email"),
    username: Joi.string().required().label("UserName"),
    password: Joi.string().required().label("Password"),
    confirmpass:Joi.string().required().label("ConfirmPassword"),
  };

  doSubmit = async () => {
   
    toast.configure();
    try {
      const { email,username, password } = this.state.data;
      console.log(email,username, password );
      const data = await user.register({ email,username, password});
      if (data) {
      
        toast.success("Signup Success");
        window.location = "/login";
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
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Signup</li>
                    </ol>
                </div>{/* End .container */}
            </nav>
           
            <div className="container mt-12">
                <div className="heading mb-12">
                    <h2 className="title">SIGNUP</h2>
                    <p>Please enter your deatils below.</p>
                </div>{/* End .heading */}

                <form className="form-group" onSubmit={this.handleSubmit}>
                {this.renderInput("email", "Email", "Enter Email")}
                {this.renderInput("username", "UserName", "Enter UserName")}
                {this.renderInput(
                    "password",
                    "Password",
                    "Enter Password",
                    "password"
                  )}
                   {this.renderInput(
                    "confirmpass",
                    "ConfirmPassword",
                    "Enter ConfirmPassword",
                    "password"
                  )}
                   
                    <div className="form-footer">
                        { this.renderButton("Login")}
                    </div>{/* End .form-footer */}
                </form>
            </div>{/* End .container */}
           
          
            <div className="mb-10"></div>{/* margin */}




            </main>
          
        <Footer/>
        </div>
        <Mobileview/>
        

      </React.Fragment>
    );
  }
}

export default Signup;
