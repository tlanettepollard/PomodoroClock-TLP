//DevTo AryanJ Tutorial commented out sections
//import moment from 'moment';
import React from 'react';


/*const Break = ({
    breakLengthSeconds,
    incrementBreakLength,
    decrementBreakLength,
    }) => {
    const breakLengthMinutes = moment.duration(breakLengthSeconds, "s").asMinutes();  

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
}; */

const Break = props => {
    return (
        <div className="break-container">
            <h3 id="break-label">Break Length</h3>

            <div className="break-btn">
                <button id="break-increment" onClick={props.incrementBreakLength} className="break-ctrl-btn">
                    <i className="fa fa-plus-square"/>
                </button>

                <h3 id="break-length">
                    {props.breakLengthMinutes}
                </h3>

                <button id="break-decrement" onClick={props.decrementBreakLength} className="break-ctrl-btn">
                    <i className="fa fa-minus-square"/>
                </button>
            </div>
        </div>
    )
}

export default Break; 