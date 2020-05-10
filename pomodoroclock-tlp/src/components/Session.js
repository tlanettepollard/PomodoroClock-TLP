import moment from "moment";
import React from "react";
 
/*export default class Session extends Component {
    render() {
        const btnClassName = this.props.isStart ? 'disable' : '';

        return (
            <div className="session-container">
                <label id="session-label">Session</label>
                <div>
                    <button className={btnClassName} id="session-increment" onClick={this.props.onIncreaseSession}>
                        <i className="fa fa-plus-square"></i>
                    </button>
                    <span id="session-length">{this.props.sessionLength}</span>
                    <button className={btnClassName} id="session-decrement" onClick={this.props.onDecreaseSession}>
                        <i className="fa fa-minus-square"></i>
                    </button>
                </div>
            </div>
        )
    }
}*/




//DevTo AryanJ Tutorial for commented section
const Session = ({
    sessionLengthSeconds,
    incrementSessionLength,
    decrementSessionLength
}) => {
    const sessionLengthMinutes = moment.duration(sessionLengthSeconds, 's').minutes();
    
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
};

export default Session; 