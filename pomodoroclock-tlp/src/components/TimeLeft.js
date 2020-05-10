//Dev-To AryanJ Tutorial in commented out sections
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React from 'react';
//import React, {useState} from 'react';
//import {useEffect} from 'react';


momentDurationFormatSetup(moment);

const TimeLeft = ({ handleStartStopClick,startStopButtonLabel, timeLeft, timerLabel }) => {  
    /*const [currentSessionType, setCurrentSessionType] = useState('Session');
    const [intervalId, setIntervalId] = useState(null);
    const [timeLeft, setTimeLeft] = useState(sessionLength);

    //change timeLeft when sessionLength changes
    useEffect(() => {
      setTimeLeft(sessionLength);
    }, [sessionLength]);

    const isStarted = intervalId !== null;
    const handleStartStopClick = () => {
      if (isStarted) {
        //if we are in started mode:
        //we want to stop the timer
        //clearInterval
        clearInterval(intervalId);
        setIntervalId(null);
      } else {
        //if we stopped mode:
        //decrement timeLeft by one every second (1000 ms)
        //to do this we'll use setInterval
        const newIntervalId = setInterval(() => {
          setTimeLeft(prevTimeLeft => {
            const newTimeLeft = prevTimeLeft - 1;
            if (newTimeLeft >= 0) {
              return prevTimeLeft - 1;
            }
            //if session:
            if (currentSessionType === 'Session') {
              //switch to break
              setCurrentSessionType('Break');
              //setTimeLeft to breakLength
              setTimeLeft(breakLength);
            }
            //if break:
            else if (currentSessionType === 'Break') {
              //switch to session
              setCurrentSessionType('Session');
              //setTimeLeft to sessionLength
              setTimeLeft(sessionLength);
            }
          });
        }, 100); 
        setIntervalId(newIntervalId);
      }
    };*/

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
