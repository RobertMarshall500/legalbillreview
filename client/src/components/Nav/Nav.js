import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateBills from "./CreateBills/CreateBills";
import EditBills from "./EditBills/EditBills";
import Bills from "./Bills/Bills";

// import "./nav.css"
// // import render from "./components/Game";


const Nav = props =>
<Router>
<div className="container">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="navbar-brand">Legal Bill Review</Link>
    <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/" className="nav-link">Show Bills</Link>
        </li>
        <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Bill</Link>
        </li>
      </ul>
    </div>
  </nav>
  <br/>
  <Route path="/" exact component={Bills} />
  <Route path="/edit/:id" component={EditBills} />
  <Route path="/create" component={CreateBills} />
</div>

</Router>



export default Nav;
