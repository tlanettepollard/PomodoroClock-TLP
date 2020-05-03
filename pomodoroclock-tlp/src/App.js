import React, {Component} from 'react';
import '../src/styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1 className="appTitle">Rebel-Cow Pomodoro Clock</h1>
        </div>
        
        <div className="footer">
          <h4 className="footer-attribute">
            React JS Pomodoro Clock App created by {" "} <a href="https://github.com/TLanetteRose">{" "} <span> T.Lanette Pollard </span></a> &nbsp;
            FreeCodeCamp Front End Libraries Project
          </h4>
        </div>
      </div>
    )
  }
}
