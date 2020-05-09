import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React from 'react';
import {useState} from 'react';

momentDurationFormatSetup(moment);

const TimeLeft = ({sessionLengthSeconds}) => {
    const [timeLeft] = useState(sessionLengthSeconds);

    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss');
    return (
      <div className="time-content">
        <label id="timer-label">Timer</label>
        <span id="time-left">{formattedTimeLeft}</span>
      </div>
    );
};

export default TimeLeft;

