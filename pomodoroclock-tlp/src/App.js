import React, {Component} from 'react';
import '../src/styles/App.css';

//import Timer from './components/Timer/Timer';
//import Controllers from './components/Controllers/Controllers';
//import Sound from './components/Sound/Sound';
export default class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="header-container">
          <h1 className="app-title">Rebel-Cow Pomodoro Clock</h1>
        </div>
        <div className="timer-container">
          /TIMER/
        </div>
        <div className="controller-container">
          /WORK/
          /BREAK/
        </div>
        <div className="sound-container">
          /SOUND/
        </div>
        <div className="footer">
          <h3 className="footer-attribute">
            React JS Pomodoro Clock App created by {" "} <a href="https://github.com/TLanetteRose"> {" "} <span> T.Lanette Pollard </span></a> &nbsp;
            FreeCodeCamp Front End Libraries Project
          </h3>
        </div>
      </div>
    )
  }
}

  