import React from 'react';
import App from '../App';

const Break = props => {
    return (
        <div className="break-container">
            <h2 id="break-label">Break Length</h2>

            <div className="break-btn">
                <button id="break-increment" className="break-ctrl-btn" onClick={props.incrementBreakLength}>
                    <i className="fa fa-plus-square"/>
                </button>

                <h3 id="break-length">
                    {props.breakLengthSeconds}
                </h3>

                <button id="break-decrement" className="break-ctrl-btn" onClick={props.decrementBreakLength}>
                    <i className="fa fa-minus-square"/>
                </button>
            </div>
        </div>
    )
}

export default Break;