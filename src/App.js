import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./navigations/RouterConfig";
import { Router, Link } from "react-router-dom";
import history from "./services/history";
import { store, persistor } from "./store/index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div>
            <Router history={history}>
              <Header />
              <nav style={{ margin: 10 }}>
                <Link to="/" style={{ padding: 5 }}>
                  Home
                </Link>
                <Link to="/about-me" style={{ padding: 5 }}>
                  About
                </Link>
                <Link to="/contact" style={{ padding: 5 }}>
                  contact
                </Link>
              </nav>
              <div classname="container">
                <AppRouter />
              </div>
              <Footer />
            </Router>
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
