import moment from 'moment';
import React from 'react';

const Break = ({
    breakLengthSeconds,
    incrementBreakLength,
    decrementBreakLength,
    }) => {
    const breakLengthMinutes = moment.duration(breakLengthSeconds, "s").minutes(); //seconds to minutes conversion

    return (
        <div>
            <p id="break-label">Break</p>
            <p id="break-length">{breakLengthMinutes}</p>
            <button id="break-increment" onClick={incrementBreakLength}>+</button>
            <button id="break-decrement" onClick={decrementBreakLength}>-</button>
        </div>
    );
};

export default Break;