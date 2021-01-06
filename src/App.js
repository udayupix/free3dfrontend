import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Accountpage from "./components/Accountpage";
import Cart from "./components/Cart";
import Checkout1 from "./components/Checkout1";
import Checkout2 from "./components/Checkout2";
import Checkoutreview from "./components/Checkoutreview";
import Forgotpass from "./components/Forgotpass";
import Home from './components/Home'
import Login from "./components/Login";
import Singlepost from "./components/Singlepost";
import Signup from "./components/Signup";


class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/singlepost"  component={Singlepost} />
          <Route path="/accountpage"  component={Accountpage} />
         
          <Route path="/cart"  component={Cart} />
          <Route path="/checkout1"  component={Checkout1} />
          <Route path="/checkout2"  component={Checkout2} />
          <Route path="/checkoutreview"  component={Checkoutreview} />
          <Route path="/forgot"  component={Forgotpass} />
          <Route path="/login"  component={Login} />
          <Route path="/signup"  component={Signup} />
         <Link to="/accountpage">accountpage</Link>
      </Switch>
      </Router>
    );
  }
}

export default App;