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
                <button className="break-ctrl-btn" id="break-increment" onClick={incrementBreakLength}>
                    <i class="fa fa-plus-square"></i>
                </button>
                <button className="break-ctrl-btn"
                id= "break-decrement" onClick={decrementBreakLength}>
                    <i class="fa fa-minus-square"></i>
                </button>
            </div>
        </div>
    );
};

export default Break;