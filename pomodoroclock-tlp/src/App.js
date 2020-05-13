import React, {useState, useEffect, useRef} from 'react';
import Session from '../src/components/Session';
import Break from '../src/components/Break';
import '../src/styles/App.css';
import soundfile from './michigan_frog.wav';



const App = () => {
  const myAudio = useRef();


  

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
