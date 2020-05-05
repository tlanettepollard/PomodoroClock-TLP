import React, {Component} from 'react';
import '../src/styles/App.css';

import Settings from './components/Settings/Settings';
import Timer from './components/Timer/Timer';
import TimerControllers from './components/Controllers/TimeControllers';


export default class App extends Component {
  constructor () {
    super()
    this.state = {
      timerId: 0,
      timerRunning: false,
      currentTime: "25 : 00",
      cycle: "Session",
      workTime: 25,
      breakTime: 5,
      sound: "on"
    }

  }



  render() {
    return (
      <div className="container">
        <div className="header-container">
          <h1 className="app-title">Rebel-Cow Pomodoro Clock</h1>
        </div>

        <div className="timer-container">
          <div>
            <span>/TIMER/</span>
            <span>/CURRENT SESSION/</span>
          </div>
        </div>

        <div className="controller-container">
          <TimerControllers 
            workTime={this.state.workTime}
            breakTime={this.state.breakTime}
            incrementWorkTime={this.incrementWorkTime}
            decrementWorkTime={this.decrementWorkTime}
            incrementBreakTime={this.incrementBreakTime}
            decrementBreakTime={this.decrementBreakTime}
            />
        </div>
        <div className="sound-container">
          /SOUND/
          <button>/SOUND ICON/</button>
        </div>
        <div className="footer">
          <h3 className="footer-attribute">
            React JS Pomodoro Clock App created by{" "}
            <a href="https://github.com/TLanetteRose">
              {" "}
              <span> T.Lanette Pollard </span>
            </a>{" "}
            &nbsp; FreeCodeCamp Front End Libraries Project
          </h3>
        </div>
      </div>
    );
  }
}

  