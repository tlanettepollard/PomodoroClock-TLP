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







  return  (
    <div className="app-container">
      <div className="header-container">
        <h1 className="app-title">Rebel-Cow Pomodoro Clock</h1>
      </div>

      <div className="timer-container">
      </div>

      <div className="settings-container">
        <Break />
        <Session />
      </div>

      <div className="sound-container">
        <audio id="beep" ref={myAudio} src={soundfile} type="audio"></audio>
      </div>

    </div>
)

}

export default App;
