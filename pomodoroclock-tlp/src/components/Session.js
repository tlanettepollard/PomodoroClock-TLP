import moment from "moment";
import React from "react";
 
const Session = ({
    sessionLengthSeconds,
    incrementSessionLength,
    decrementSessionLength
}) => {
    const sessionLengthMinutes = moment.duration(sessionLengthSeconds, 's').minutes();
    
    return (
        <div>
            <p id="session-label">Session</p>
            <p id="session-length">{sessionLengthMinutes}</p>
            <button id="session-increment" onClick={incrementSessionLength}>+</button>
            <button id="session-decrement" onClick={decrementSessionLength}>-</button>
        </div>
    );
};

export default Session;