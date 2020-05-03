import React, {Component} from 'react';
import '../src/styles/App.css';

//import Timer from './components/Timer/Timer';
//import Controllers from './components/Controllers/Controllers';
import Sound from './components/Sound/Sound';
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1 className="appTitle">Rebel-Cow Pomodoro Clock</h1>
        </div>
        <Sound setSound={this.setSound} sound={this.state.sound}/>
        <div className="footer">
          <h4 className="footer-attribute">
            React JS Pomodoro Clock App created by {" "} <a href="https://github.com/TLanetteRose">{" "} <span> T.Lanette Pollard </span></a> &nbsp;
            FreeCodeCamp Front End Libraries Project
          </h4>
        </div>
      </div>
    );
  }
}
