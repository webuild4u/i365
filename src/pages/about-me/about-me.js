import React, { Component } from "react";
 
class AboutMe extends Component {
  componentDidMount(){
    console.log('About Me component');
  }
  render() {
    return (
      <div>
        <h2>About Me</h2>
      </div>
    );
  }
}
export default AboutMe;

// Container -> fragments