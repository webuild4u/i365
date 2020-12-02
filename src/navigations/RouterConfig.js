import React, { useState, useMemo } from "react";
import { UserContext } from "../hooks/UserContext";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
//import { Login, Home, PageOne, PageTwo, NoMatch } from './pages/';

import AboutMe from "../pages/about-me/about-me";
import Contact from "../pages/contact/contact";
import Project from "../pages/projects/project";
import Home from "../pages/home/home";
import ProductsList from "../pages/products/ProductList";
import Cart from "../pages/cart/Cart";
import AuthRoute from "./AuthRoute";

function AppRouter() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={value}>
      <Switch>
        <Route component={ProductsList} path="/" exact />
        <Route component={Home} path="/home" exact />
        <Route component={withRouter(AboutMe)} path="/about-me" exact />
        <Route component={withRouter(Contact)} path="/contact" exact />
        <Route component={Project} path="/project" exact />
        <Route
         component={Cart} path="/cart" exact />
        {/* <AuthRoute component={Cart} path="/cart" exact /> */}
        {/* <PrivateRoute component={AboutMe} path="/home" exact />
          <PrivateRoute component={Contact} path="/contact-me" exact />
          <PrivateRoute component={Project} path="/portfolio" exact /> */}
        {/* <PrivateRoute component={NoMatch} path="*" /> */}
      </Switch>
    </UserContext.Provider>
  );
}

export default AppRouter;
