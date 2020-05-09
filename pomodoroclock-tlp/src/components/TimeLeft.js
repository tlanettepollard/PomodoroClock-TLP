import React from 'react';
import {useState} from 'react';

const TimeLeft = ({sessionLengthSeconds}) => {
    const [timeLeft] = useState(sessionLengthSeconds)

    return <p id="time-left">{timeLeft}</p>
};

export default TimeLeft;

