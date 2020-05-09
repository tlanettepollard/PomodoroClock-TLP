import moment from 'moment';
import React from 'react';

const Break = ({
    breakLengthSeconds,
    incrementBreakLength,
    decrementBreakLength,
    }) => {
    const breakLengthMinutes = moment.duration(breakLengthSeconds, "s").minutes(); //seconds to minutes conversion

    return (
        <div className="break-container">
            <p id="break-label">Break</p>
            <p id="break-length">{breakLengthMinutes}</p>
            <div className="break-btn">
                <button id="break-increment" onClick={incrementBreakLength}>+</button>
                <button id="break-decrement" onClick={decrementBreakLength}>-</button>
            </div>
        </div>
    );
};

export default Break;