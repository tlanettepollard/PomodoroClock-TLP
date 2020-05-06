import React, {Component} from 'react';
import '../src/styles/App.css';

import Settings from './components/Settings/Settings';
import Timer from './components/Timer/Timer';
import TimerControllers from './components/Controllers/Controllers';
import Sound from './components/Sound/Sound';


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

  startTimer = (duration) => {
    this.setState({timerRunning: true})
    let time = duration * 60
    let minutes;
    let seconds;
    let runningTimer = setInterval(() => {
      this.setState({
        timerId: runningTimer
      })
      minutes = Math.floor(time / 60)
      seconds = time - minutes * 60
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      this.setState({currentTime : `${minutes} : ${seconds}`})
      if (time === 0) {
        if(this.state.cycle === "Session"){
          this.setState({
            cycle: "Break",
            timerRunning: false
          })
          clearInterval(this.state.timerId)
          this.startTimer(this.state.breakTime)
        } else {
          this.setState({
            cycle: "Session",
            timerRunning: false
          })
          clearInterval(this.state.timerId)
          this.startTimer(this.state.workTime)
        }
      }
    }, 1000);
  }



  render() {
    return (
      <div className="container">
        <div className="header-container">
          <h1 className="app-title">Rebel-Cow Pomodoro Clock</h1>
        </div>

        <div className="timer-container">
          <Timer />
          <Settings className="settings-container"/>
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
         <Sound setSound={this.setSound} sound={this.state.sound} />
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

  