import React, {useState, useEffect, useRef} from 'react';
import Session from '../src/components/Session';
import Break from '../src/components/Break';
import './styles/App.css';
import soundfile from './michigan_frog.wav';



const App = () => {
  const myAudio = useRef();
  const context = new AudioContext();
  const [breakLengthSeconds, setBreakLength]= useState(5);
  const [sessionLengthSeconds, setSessionLength]= useState(25);
  const [timerLabel, setTimerLabel]= useState('Session');
  const [timeLeft, setTimeLeft]= useState(25 * 60);
  const [timerRunning, setTimerRunning]= useState(false);

  const incrementSessionLength = () => {
    if (!timerRunning && sessionLengthSeconds < 60){
      setSessionLength(sessionLengthSeconds + 1)
      setTimeLeft((sessionLengthSeconds + 1) * 60);
    }
  }
  const decrementSessionLength = () => {
    if(!timerRunning && sessionLengthSeconds > 1){
      setSessionLength(sessionLengthSeconds - 1)
      setTimeLeft((sessionLengthSeconds - 1) * 60);
    }
  }
  const incrementBreakLength = () => {
    if(!timerRunning && breakLengthSeconds < 60){
      setBreakLength(breakLengthSeconds + 1)
    }
  }
  const decrementBreakLength = () => {
    if(!timerRunning && breakLengthSeconds > 1){
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



  return  (
    <div className="app-container">
      <div className="header-container">
        <h1 className="app-title">Rebel-Cow Pomodoro Clock</h1>
      </div>

      <div className="timer-container">
        <h2 id="timer-label">{timerLabel}</h2>
        <h3 id="time-left">
          {minutes < 10 ? ("0" + minutes).slice(-2) : minutes}:{seconds < 10 ? ("0" + seconds).slice(-2) : seconds}
        </h3>

        <button id="start_stop" className="start-stop-btn" onClick={timerRunning ? handleStop : handleStart}>
          <p>Start/Stop</p>
          <i className="fa fa-play fa-2x"/>
          <i className="fa fa-pause fa-2x"/>
        </button>
        <button id="reset" className="reset-btn" onClick={handleReset}>
          <p>Reset</p>
          <i className="fa fa-refresh fa-2x"/>
        </button>
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
        <audio id="beep" ref={myAudio} src={soundfile} type="audio"></audio>
      </div>

    </div>
  )

}

export default App;
