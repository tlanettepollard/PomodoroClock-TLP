import React, {Component} from "react";
 
export default class WorkController extends Component {
handleWorkIncrement = () => {
    this.props.incrementWorkTime()
    if (this.props.timeRunning === false) {
        this.props.setCurrentTime(this.props.workTime)
    }
}

handleWorkDecrement = () => {
    this.props.decrementWorkTime()
    if (this.props.timerRunning === false) {
        this.props.setCurrentTime(this.props.workTime)
    }
}

    render() {
        //const btnClassName = this.props.isStart ? 'disable' : '';

        return (
            <div className="settings">
                <div className="settings-section">
                    <label id="session-label">Session Length</label>
                    <div>
                        <button  id="session-increment" onClick={this.handleWorkIncrement}> + </button>
                        <span id="session-length">{this.props.workTime}</span>
                        <button id="session-decrement" onClick={this.handleWorkDecrement}> - </button>
                    </div>
                </div>
            </div>
        )
    }
}