import React, { Component } from 'react';
import './App.css';
import "./assets/css/style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateBills from "./components/CreateBills/CreateBills";
import EditBills from "./components/EditBills/EditBills";
import Bills from "./components/Bills/Bills";
import Main from "./components/Main/Main"
import SignIn from "./components/SignIn/SignIn";
import Logo from "./assets/Logo.JPG";
// import "./assets/css/materialize.css";
// import "./assets/css/materialize.min.css";
// import "./assets/css/style.css";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="white" role="navigation">
            <div className="nav-wrapper container">
            <Link to="/" className="navbar-brand">
              <img src={Logo} height= "25px" alt="Unsplashed background img 2" /></Link>
              <ul className="right hide-on-med-and-down">
                <li>
                    <Link to="/bills" className="navbar-brand">Show Bills</Link>
                </li>
                <li>
                    <Link to="/create" className="navbar-brand">Create Bills</Link>
                </li>
                <li>
                    <Link to="/signin" className="navbar-brand">Sign In</Link>
                </li>
              </ul>
              <ul id="nav-mobile" className="sidenav">
                <li>
                  <a href="#">Navbar Link</a>
                </li>
              </ul>
              <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        </nav>
          <Route path="/" exact component={Main} />
          <Route path="/bills" exact component={Bills} />
          <Route path="/edit/:id" component={EditBills} />
          <Route path="/create" component={CreateBills} />
          <Route path="/signin" component={SignIn} />

        </div>
      </Router>
      

    );
  }
}

export default App;
