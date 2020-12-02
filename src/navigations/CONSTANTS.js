import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './scenes/home/home';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import AboutMe from './scenes/about-me/about-me';
import Contact from './scenes/contact/contact';
import Project from './scenes/projects/project';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-me">About Me</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/" component={Home}/>
            <Route path="/about-me" component={AboutMe}/>
            <Route path="/projects" component={Project}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
