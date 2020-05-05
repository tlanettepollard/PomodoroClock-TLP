import React, {Component} from "react";
 
export default class WorkController extends Component {
    render() {
        const btnClassName = this.props.isStart ? 'disable' : '';
        
        return (
            <div className="controller">
                <div className="controller-section">
                    <label id="session-label">Session Length</label>
                    <div>
                        <button className={btnClassName} id="session-increment" onClick={this.props.onIncreaseSession}>+</button>
                        <span id="session-length">{this.props.sessionLength}</span>
                        <button className={btnClassName} id="session-decrement" onClick={this.props.onDecreaseSession}>-</button>
                    </div>
                </div>
            </div>
        )
    }
}