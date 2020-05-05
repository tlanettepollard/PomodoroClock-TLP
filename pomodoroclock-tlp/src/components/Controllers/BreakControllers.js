import React, {Component} from 'react';

export default class BreakController extends Component {
    render () {
        const btnClassName = this.props.isStart ? 'disable' : '';

        return (
            <div className="controller">
                <div className="break-section">
                    <label id="break-label">Break Length</label>
                    <button className={btnClassName} id="break-increment" onClick={this.props.onIncreaseBreak}>+</button>
                    <span id="break-length">{this.props.breakLength}</span>
                    <button className={btnClassName} id="break-decrement" onClick={this.props.onDecreaseBreak}>-</button>
                </div>
            </div>
        )
    }
}