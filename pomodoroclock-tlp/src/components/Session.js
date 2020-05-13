import React from 'react';

const Session = props => {
    return (
        <div className="session-container">
            <h3 id="session-label">Session Length</h3>

            <div className="session-btn">
                <button id="session-increment" onClick={props.incrementSession}>
                    <i className="fa fa-plus-square fa-2x"/>
                </button>
                <h3 id="session-length">
                    {props.sessionLength}
                </h3>
                <button id="session-decrement" onClick={props.decrementSession}>
                    <i className="fa fa-minus-square fa-2x"/>
                </button>
            </div>
        </div>
    )
}

export default Session;