//Dev-To AryanJ Tutorial in commented out sections
//import moment from 'moment';
//import momentDurationFormatSetup from 'moment-duration-format';
import React from 'react';
//import React, {useState} from 'react';
//import {useEffect} from 'react';



//momentDurationFormatSetup(moment);

const TimeLeft = ({ 
  handleStart,
  handleStop,
  handleReset,
  timerRunning,
  minutes,
  seconds,
  myAudio,
  soundfile,
  timerLabel
 }) => {
   

    //const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', {trim: false});

    return (
      <div className="time-container">
        <label id="timer-label">{timerLabel}</label>
        <span id="time-left">{minutes < 10 ? ("0" + minutes).slice(-2) : minutes}:{seconds <10 ? ("0" + seconds).slice(-2) : seconds}</span>

        <button id="start_stop" onClick={timerRunning ? handleStart : handleStop}>
          <p>Start/Stop</p>
          <i className="fa fa-play fa-2x"/>
          <i className="fa fa-pause fa-2x"/>
        </button>
        <button id="reset" onClick={handleReset}>
          <p>Reset</p>
          <i className="fa fa-refresh fa-2x"/> 
        </button>
      

        <div className="sound-container">
          <audio id="beep" ref={myAudio} src={soundfile} type='audio'/>
        </div>
      </div>
    );
};


export default TimeLeft;
