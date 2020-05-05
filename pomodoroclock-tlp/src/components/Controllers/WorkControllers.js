import React, {Component} from "react";
 
export default class WorkController extends Component {
handleWorkIncrement = () => {
    this.props.incrementWorkTime()
}

handleWorkDecrement = () => {
    this.props.decrementWorkTime()
}

    render() {
        const btnClassName = this.props.isStart ? 'disable' : '';

        return (
            <div className="controller">
                <div className="controller-section">
                    <label id="session-label">Session Length</label>
                    <div>
                        <button className={btnClassName} id="session-increment" onClick={this.handleWorkIncrement}> + </button>
                        <span id="session-length">{this.props.workTime}</span>
                        <button className={btnClassName} id="session-decrement" onClick={this.handleWorkDecrement}> - </button>
                    </div>
                </div>
            </div>
        )
    }
}