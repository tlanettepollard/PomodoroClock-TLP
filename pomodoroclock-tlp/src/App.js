import React, {Component} from 'react';
import '../src/styles/App.css';

import Settings from './components/Settings/Settings';
import Timer from './components/Timer/Timer';
import Controllers from './components/Controllers/Controllers';
import Sound from './components/Sound/Sound';


export default class App extends Component {
  constructor (props) {
    super(props);
    this.audioBeep = React.createRef();

    this.state = {
      breakLength: Number.parseInt(this.props.defaultBreakLength, 10),
      sessionLength: Number.parseInt(this.props.defaultSessionLength, 10),
      timeLabel: 'Session',
      timeLeftInSecond: Number.parseInt(this.props.defaultSessionLength, 10) * 60,
      isStart: false,
      timerInterval: null
    }
    this.onIncreaseBreak = this.onIncreaseBreak.bind(this);
    this.onDecreaseBreak = this.onDecreaseBreak.bind(this);
    this.onIncreaseSession = this.onIncreaseSession.bind(this);
    this.onDecreaseSession = this.onDecreaseSession.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onStartStop = this.onStartStop.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.phaseControl = this.phaseControl.bind(this);

  }

  onIncreaseBreak() {
    if (this.state.breakLength < 60 && !this.state.isStart) {
      this.setState({
        breakLength: this.state.breakLength + 1
      });
    }
  }

  onDecreaseBreak() {
    if (this.state.breakLength > 1 && !this.state.isStart) {
      this.setState({
        breakLength: this.state.breakLength - 1
      });
    }
  }

  onIncreaseSession() {
    if (this.state.sessionLength < 60 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timeLeftInSecond: (this.state.sessionLength + 1) * 60
      });
    }
  }

  onDecreaseSession() {
    if (this.state.sessionLength > 1 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timeLeftInSecond: (this.state.sessionLength - 1) * 60,
      });
    }
  }

  onReset() {
    this.setState({
      breakLength: Number.parseInt(this.props.defaultBreakLength, 10),
      sessionLength: Number.parseInt(this.props.defaultSessionLength, 10),
      timeLabel: 'Session',
      timeLeftInSecond: Number.parseInt(this.props.defaultSessionLength, 10) * 60,
      isStart: false,
      timerInterval: null
    });
    this.audioBeep.current.pause();
    this.audioBeep.current.currentTime = 0;
    this.state.timerInterval && clearInterval(this.state.timerInterval);
  }

 onStartStop() {
   if (!this.state.isStart) {
     this.setState({
       isStart: !this.state.isStart,
       timerInterval: setInterval(() => {
         this.decreaseTimer();
         this.phaseControl();
       }, 1000)
     })
   } else {
     this.audioBeep.current.pause();
     this.audioBeep.current.currentTime = 0;
     this.state.timerInterval && clearInterval(this.state.timerInterval);

     this.setState({
       isStart: !this.state.isStart,
       timerInterval: null
     });
   }
 }

  
  /*startTimer = (duration) => {
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
  }*/



  render() {
    return (
      <div className="container">
        <div className="header-container">
          <h1 className="app-title">Rebel-Cow Pomodoro Clock</h1>
        </div>

        <div className="timer-container">
          <Timer 
            timeLabel={this.state.timeLabel}
            timeLeftInSecond={this.state.timeLeftInSecond}
            />
          <Controllers className="controllers-container"
            onReset={this.onReset}
            onStartStop={this.onStartStop}
            isStart={this.state.isStart}
          />
        </div>

        <div className="settings-container">
          <Settings />
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

  