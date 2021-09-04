import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import AboutUs from "views/AboutUs/AboutUs";
import Footer from "views/Components/Sections/Footer";
import SectionLogin from "views/Components/Sections/SectionLogin";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} exact />
      <Route path="/profile-page" component={ProfilePage} exact />
      <Route path="/login-page" component={LoginPage} exact/>
      <Route path="/" component={Components} exact/>
      <Route path='/about' component={AboutUs} exact/>
    </Switch>
   

  </Router>,
  document.getElementById("root")
);
