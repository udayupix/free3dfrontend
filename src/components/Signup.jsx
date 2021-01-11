import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Mobileview from "./Mobileview";
class Signup extends Component {
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
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Signup</li>
                    </ol>
                </div>{/* End .container */}
            </nav>
           
            <div className="container mt-12">
                <div className="heading mb-12">
                    <h2 className="title">SIGNUP</h2>
                    <p>Please enter your deatils below.</p>
                </div>{/* End .heading */}

                <form action="#">
                    <div className="form-group required-field">
                        <label for="reset-email">Email</label>
                        <input type="email" className="form-control" id="reset-email" name="reset-email" required/>
                    </div>{/* End .form-group */}
                    <div className="form-group required-field">
                        <label for="reset-email">Password</label>
                        <input type="password" className="form-control" id="password" name="password" required/>
                    </div>{/* End .form-group */}
                    <div className="form-group required-field">
                        <label for="reset-email">Confirm-Password</label>
                        <input type="password" className="form-control" id="conformpass" name="conformpass" required/>
                    </div>{/* End .form-group */}

                    <div className="form-footer">
                        <button type="submit" className="btn btn-primary">Submit</button>
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
