//Dev-To AryanJ Tutorial in commented out sections
//import moment from 'moment';
//import momentDurationFormatSetup from 'moment-duration-format';
import React, {Component} from 'react';
//import {useState} from 'react';

//momentDurationFormatSetup(moment);

/*const TimeLeft = ({sessionLengthSeconds}) => {
    const [timeLeft] = useState(sessionLengthSeconds);

    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss');

    return (
      <div className="time-content">
        <label id="timer-label">Timer</label>
        <span id="time-left">{formattedTimeLeft}</span>
      </div>
    );
};*/

  const formatTime = (timeLeftInSecond) => {
  let minute = Math.floor(timeLeftInSecond / 60);
  if (minute < 10) minute = '0' + minute;

  let second = timeLeftInSecond - 60 * minute;
  if (second < 10) second = '0' + second;

  return `${minute}:${second}`;
}

export default class TimeLeft extends Component {
  render() {
    return (
      <div className="time-content">
        <label id="timer-label">{this.props.timeLabel}</label>
        <span id="time-left">{formatTime(this.props.timeLeftInSecond)}</span>
      </div>
    )
    
  }
}





//export default TimeLeft;
