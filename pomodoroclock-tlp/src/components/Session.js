//import moment from "moment";
import React from "react";
 

//DevTo AryanJ Tutorial for commented section
/*const Session = ({
    sessionLengthSeconds,
    incrementSessionLength,
    decrementSessionLength
}) => {
    const sessionLengthMinutes = moment.duration(sessionLengthSeconds, 's').asMinutes();
    
    return (
        <div className="session-container">
            <p id="session-label">Session</p>
            <p id="session-length">{sessionLengthMinutes}</p>
            <div className="session-btn">
                <button className="session-ctrl-btn" id="session-increment" onClick={incrementSessionLength}>
                    <i class="fa fa-plus-square"></i>
                </button>
                <button className="session-ctrl-btn" id="session-decrement" onClick={decrementSessionLength}>
                    <i class="fa fa-minus-square"></i>
                </button>
            </div>
        </div>
    );
};*/
const Session = props => {

    return (
        <div className="session-container">
            <h3 id="session-label">Session</h3>

            <div className="session-btn">
                <button id="session-increment" className="session-ctrl-btn" onClick={props.incrementSessionLength}>
                    <i className="fa fa-plus-square"/>
                </button>

                <h3 id="session-length">
                    {props.sessionLengthMinutes}
                </h3>

                <button id="session-decrement" className="session-ctrl-btn" onClick={props.decrementSessionLength}>
                    <i className="fa fa-minus-square"/>
                </button>
            </div>
        </div>
    )
}





export default Session; 