import React, {useState} from 'react';

const Break = () => {
    const[
        breakLengthSeconds,
        setBreakLengthSeconds
    ] = useState(300); //seconds for 5 minutes

    const decrementBreakLength = () => {
        const newBreakLength = breakLengthSeconds - 60;
        if (newBreakLength < 0){
            setBreakLengthSeconds(0);
        }else {
            setBreakLengthSeconds(newBreakLength);
        }
    };
    const incrementBreakLength = () => {
        setBreakLengthSeconds(
            breakLengthSeconds + 60
        );
    }

    return (
        <div>
            <p id="break-label">Break</p>
            <p id="break-length">{breakLengthSeconds}</p>
            <button id="break-increment" onClick={incrementBreakLength}>+</button>
            <button id="break-decrement" onClick={decrementBreakLength}>-</button>
        </div>
    );
}

export default Break;