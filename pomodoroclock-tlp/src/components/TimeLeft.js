//Dev-To AryanJ Tutorial in commented out sections
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React from 'react';
//import {useState} from 'react';

momentDurationFormatSetup(moment);

const TimeLeft = ({ handleStartStopClick, startStopButtonLabel, timeLeft, timerLabel }) => {
    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', {trim: false});

    return (
      <div className="time-content">
        <label id="timer-label">{timerLabel}</label>
        <span id="time-left">{formattedTimeLeft}</span>
        <button 
      </div>
    );
};

  

export default TimeLeft;
