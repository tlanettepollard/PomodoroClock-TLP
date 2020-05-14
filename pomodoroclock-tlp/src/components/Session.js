import React from 'react';

const Session = props => {
    return (
        <div className="session-container">
            <h2 id="session-label">Session Length</h2>

            <div className="session-btn">
                <button id="session-increment" className="session-ctrl-btn" onClick={props.incrementSessionLength}>
                    <i className="fa fa-plus-square"/>
                </button>
                <h3 id="session-length">
                    {props.sessionLengthSeconds}
                </h3>
                <button id="session-decrement" className="session-ctrl-btn" onClick={props.decrementSessionLength}>
                    <i className="fa fa-minus-square"/>
                </button>
            </div>
        </div>
    )
}

export default Session;