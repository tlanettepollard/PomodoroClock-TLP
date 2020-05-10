//import React, {useState} from 'react';
import React, {Component} from 'react';
import '../src/styles/App.css';

import Break from './components/Break';
import Session from './components/Session';
import TimeLeft from './components/TimeLeft';
import Controllers from './components/Controllers';
//import Sound from './components/Sound';



export default class App extends Component {
  constructor(props) {
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
    if(this.state.breakLength < 60 && !this.state.isStart){
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

   onDecreaseSession(){
     if (this.state.sessionLength > 1 && !this.state.isStart) {
       this.setState({
         sessionLength: this.state.sessionLength - 1,
         timeLeftInSecond: (this.state.sessionLength - 1) * 60
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
decreaseTimer() {
  this.setState({
    timeLeftInSecond: this.state.timeLeftInSecond - 1
  });
}

phaseControl() {
  if (this.state.timeLeftInSecond === 0) {
    this.audioBeep.current.play();
  } else if (this.state.timeLeftInSecond === -1) {
    if (this.state.timeLabel === 'Session') {
      this.setState({
        timeLabel: 'Break',
        timeLeftInSecond: this.state.breakLength * 60
      });
    } else {
      this.setState({
        timeLabel: 'Session',
        timeLeftInSecond: this.state.sessionLength * 60
      });
    }
  }
}

render() {
  return (
    <div className="container">
      <div className="head-container">
        <h1 className="app-title"> Rebel-Cow Pomodoro Clock </h1>
      </div>

      <div className="timeleft-container">
        <TimeLeft 
        timeLabel={this.state.timeLabel}
        timeLeftInSecond={this.state.timeLeftInSecond}
        />
      </div>

      <div className="control-container">
        <Controllers
        onReset={this.onReset}
        onStartStop={this.onStartStop}
        isStart={this.state.isStart}
        />
      </div>
      <audio id="beep" preload="auto" src="https://goo.gl/65cBl1" ref={this.audioBeep}></audio>

      <div className="settings-container">
        <Break
        breakLength={this.state.breakLength}
        onIncreaseBreak={this.onIncreaseBreak}
        onDecreaseBreak={this.onDecreaseBreak}
        isStart={this.state.isStart}
        />
        <Session
        sessionLength={this.state.sessionLength}
        onIncreaseSession={this.onIncreaseSession}
        onDecreaseSession={this.onDecreaseSession}
        isStart={this.state.isStart}
        />
      </div>

      <div className="footer">
        <h3 className="footer-attribute">
        React JS Pomodoro Clock App created by {" "
        } <a href="https://github.com/TLanetteRose"> {" "} <span> T.Lanette Pollard </span> </a>{" "} &nbsp;FreeCodeCamp Front End Libraries Project</h3> 
      </div>
    </div>
  );
}

}

//Dev-To AryanJ Tutorial in commented out sections
/*function App() {
  const [breakLengthSeconds, setBreakLength] = useState(300);
  const [sessionLengthSeconds, setSessionLength] = useState(60 * 25);

  const decrementBreakLength = () => {
    const newBreakLength = breakLengthSeconds - 60;
    if (newBreakLength < 0) {
      setBreakLength(0);
    } else {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakLength = () => setBreakLength(breakLengthSeconds + 60);

  const decrementSessionLength = () => {
    const newSessionLength = sessionLengthSeconds - 60;
    if (newSessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLength);
    }
  };
  const incrementSessionLength = () =>
  setSessionLength(sessionLengthSeconds + 60);


    return (
      <div className="container">
        <div className="header-container">
          <h1 className="app-title">Rebel-Cow Pomodoro Clock</h1>
        </div>

        <div className="timeleft-container">
          <TimeLeft 
          sessionLengthSeconds={sessionLengthSeconds} />
        </div>

        <div className="control-container">
          <Controllers
          />
        </div>
        
        <div className="settings-container">
          <Break
            breakLengthSeconds={breakLengthSeconds}
            incrementBreakLength={incrementBreakLength}
            decrementBreakLength={decrementBreakLength}
          />
          <Session
            sessionLengthSeconds={sessionLengthSeconds}
            incrementSessionLength={incrementSessionLength}
            decrementSessionLength={decrementSessionLength}
          />
        </div>
        <div className="sound-container">
          <Sound />
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
  
}*/


//export default App;
  