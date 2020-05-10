//import React, {useState} from 'react';
import React, {Component} from 'react';
import '../src/styles/App.css';

import Break from './components/Break';
import Session from './components/Session';
import TimeLeft from './components/TimeLeft';
import Controllers from './components/Controllers';
import Sound from './components/Sound';



export default class App extends Component {
  constructor(props) {
    super(props);

    this.audioBeep = React.createRef();

    this.state = {
      breakLength: Number.parseInt(this.props.defaultBreakLength, 5),
      sessionLength: Number.parseInt(this.props.defaultSessionLength, 25),
      timeLabel: 'Session',
      timeLeftInSecond: Number.parseInt(this.props.defaultSessionLength, 25) * 60,
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
       breakLength: Number.parseInt(this.props.defaultBreakLength, 5),
       sessionLength: Number.parseInt(this.props.defaultSessionLength, 25),
       timeLabel: 'Session',
       timeLeftInSecond: Number.parseInt(this.props.defaultSessionLength, 25) * 60,
       isStart: false,
       timerInterval: null
     });
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
  