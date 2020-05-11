//import React, {useState} from 'react';
import React, {useState, useEffect, useRef} from 'react';
import '../src/styles/App.css';

import Break from './components/Break';
import Session from './components/Session';
import TimeLeft from './components/TimeLeft';
//import Controllers from './components/Controllers';
//import Sound from './components/Sound';



//Dev-To AryanJ Tutorial in commented out sections
function App() {
  const [breakLengthSeconds, setBreakLength] = useState(300);
  const [sessionLengthSeconds, setSessionLength] = useState(60 * 25);
  const audioElement = useRef(null);
  const[currentSessionType, setCurrentSessionType] = useState('Session');
  const[intervalId, setIntervalId] = useState(null);
  const[timeLeft, setTimeLeft] = useState(sessionLengthSeconds);

// change timeLeft when sessionLength changes
  useEffect(() => {
    setTimeLeft(sessionLengthSeconds);
  }, [sessionLengthSeconds]);

  const decrementBreakLength = () => {
    const newBreakLength = breakLengthSeconds - 60;
    if (newBreakLength > 0) {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakLength = () => {
    const newBreakLength = breakLengthSeconds + 60;
    if (newBreakLength <= 60 * 5) {
    setBreakLength(newBreakLength);
    }
  };

  const decrementSessionLength = () => {
    const newSessionLength = sessionLengthSeconds - 60;
    if (newSessionLength > 0) {
      setSessionLength(newSessionLength);
    } 
  };

  const incrementSessionLength = () => {
    const newSessionLength = sessionLengthSeconds + 60;
    if (newSessionLength <= 60 * 25) {
      setSessionLength(sessionLengthSeconds + 60);
    }
};
  //Timer

  const isStarted = intervalId !== null;
  const handleStartStopClick = () => {
    if (isStarted) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const newIntervalId = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return newTimeLeft;
          }
          // time left is less than zero
          audioElement.current.play();
          // if session: 
          if (currentSessionType === 'Session') {
            //switch to break
            setCurrentSessionType('Break');
            // setTimeLeft to breakLength
            return breakLengthSeconds;
          }
          // if break:
          else if (currentSessionType === 'Break') {
            //switch to session
            setCurrentSessionType('Session');
            //setTimeLeft to sessionLength
            return sessionLengthSeconds;
          }
        });
      }, 100);
      setIntervalId(newIntervalId);
    }
  };

  //Reset 
  const handleResetBtnClick = () => {
    //reset audio
    audioElement.current.load();
    //clear timeout interval
    clearInterval(intervalId);
    //set intervalId null
    setIntervalId(null);
    //set the sessiontype to 'Session'
    setCurrentSessionType('Session');
    //reset the session length to 25 minutes 
    setSessionLength(25);
    //reset the break length to 5 minutes
    setBreakLength(5);
    //reset the timer to 25 minutes (initial session length)
    setTimeLeft(25);
  };


    return (
      <div className="container">
        <div className="header-container">
          <h1 className="app-title">Rebel-Cow Pomodoro Clock</h1>
        </div>

        <div className="timeleft-container">
          <TimeLeft 
          handleResetBtnClick={handleResetBtnClick}
          handleStartStopClick={handleStartStopClick}
          timerLabel={currentSessionType}
          startStopButtonLabel={isStarted ? 'Stop' : 'Start'}
          timeLeft={timeLeft} />
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
        <audio id="beep" preload="auto" ref={audioElement} src="../public/tolling-bell_daniel-simion. mp3" type="audio/mpeg">
        </audio>
       
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




export default App;
  