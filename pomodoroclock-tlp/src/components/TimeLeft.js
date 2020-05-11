//Dev-To AryanJ Tutorial in commented out sections
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React from 'react';
//import React, {useState} from 'react';
//import {useEffect} from 'react';


momentDurationFormatSetup(moment);

const TimeLeft = ({ 
  handleResetBtnClick,
  handleStartStopClick,
  startStopButtonLabel, 
  timeLeft, 
  timerLabel
 }) => {

    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', {trim: false});

    return (
      <div className="time-content">
        <label id="timer-label">{timerLabel}</label>
        <span id="time-left">{formattedTimeLeft}</span>
        <button id="start_stop" onClick={handleStartStopClick}>
          {startStopButtonLabel}
        </button>
      </div>
    );
};

  

export default TimeLeft;
