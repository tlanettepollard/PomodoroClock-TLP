//import React, {useState} from 'react';
import React, {useState, useEffect, useRef} from 'react';
import '../src/styles/App.css';

import Break from './components/Break';
import Session from './components/Session';
import TimeLeft from './components/TimeLeft';
import soundfile from './michigan_frog.wav';
//import Controllers from './components/Controllers';
//import Sound from './components/Sound';



//Dev-To AryanJ Tutorial in commented out sections
/*function App() {
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
    if (newBreakLength <= 60 * 60) {
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
    if (newSessionLength <= 60 * 60) {
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
      }, 1000);
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
    setSessionLength(60 * 25);
    //reset the break length to 5 minutes
    setBreakLength(60 * 5);
    //reset the timer to 25 minutes (initial session length)
    setTimeLeft(60 * 25);
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
  
}*/

const App = () => {
  const [sessionLengthSeconds, setSessionLength] = useState(25);
  const [breakLengthSeconds, setBreakLength] = useState(5);
  const [timerLabel, setTimerLabel] = useState('Session');
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const myAudio = useRef();
  const context = new AudioContext();

  const incrementSessionLength = () => {
    if (!timerRunning && sessionLengthSeconds < 60){
      setSessionLength(sessionLengthSeconds +1)
      setTimeLeft((sessionLengthSeconds + 1) * 60);
    }
  }

  const decrementSessionLength = () => {
    if (!timerRunning && sessionLengthSeconds > 1){
      setSessionLength(sessionLengthSeconds - 1)
      setTimeLeft((sessionLengthSeconds - 1) * 60);
    }
  }

  const incrementBreakLength = () => {
    if (!timerRunning && breakLengthSeconds < 60) {
      setBreakLength(breakLengthSeconds + 1)
    }
  }

  const decrementBreakLength = () => {
    if (!timerRunning && breakLengthSeconds > 1) {
      setBreakLength(breakLengthSeconds - 1)
    }
  }

  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  useEffect(() => {
    const handleSwitch = () => {
      if (timerLabel === 'Session') {
        setTimerLabel('Break');
        setTimeLeft(breakLengthSeconds * 60);
      } else if (timerLabel === 'Break') {
        setTimerLabel('Session');
        setTimeLeft(sessionLengthSeconds * 60);
      }
    }

    let countdown = null;
    if (timerRunning && timeLeft > 0) {
      countdown = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timerRunning && timeLeft === 0) {
      countdown = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      myAudio.current.play();
      handleSwitch();
    } else {
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  },
  [timerRunning, timeLeft, timerLabel, breakLengthSeconds, sessionLengthSeconds, myAudio]);
  
  const handleStart = () => {
    context.resume();
    setTimerRunning(true);
  }
  const handleStop = () => {
    setTimerRunning(false);
  }

  const handleReset = () => {
    setSessionLength(25);
    setBreakLength(5);
    setTimeLeft(25 * 60);
    setTimerLabel('Session');
    setTimerRunning(false);
    myAudio.current.pause();
    myAudio.current.currentTime = 0;
  }

  return (
    <div className="container">
      <div className="header-container">
        <h1 className="app-title">Rebel-Cow Pomodoro Clock</h1>
      </div>

      <div className="timeleft-container">
        <TimeLeft 
        minutes={minutes}
        seconds={seconds}
        handleStart={handleStart}
        handleStop={handleStop}
        handleReset={handleReset}
        soundfile={soundfile}
        myAudio={myAudio}
        />
      </div>

      <div className="settings-container">
        <Break
        breakLengthSeconds={breakLengthSeconds}
        incrementSessionLength={incrementBreakLength}
        decrementBreakLength={decrementBreakLength}
        />
        <Session
        sessionLengthSeconds={sessionLengthSeconds}
        incrementSessionLength={incrementSessionLength}
        decrementSessionLength={decrementSessionLength}
        />
      </div>


    </div>
  )


}




export default App;
  