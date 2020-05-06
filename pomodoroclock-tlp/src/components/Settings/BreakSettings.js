import React, {Component} from 'react';

export default class BreakSettings extends Component {
    handleBreakIncrement = () => {
        this.props.incrementBreakTime()
    }

    handleBreakDecrement = () => {
        this.props.decrementBreakTime()
    }

    render () {
        //const btnClassName = this.props.isStart ? 'disable' : '';

        return (
            <div className="settings">
                <div className="settings-section">
                    <label id="break-label">Break Length</label>
                    <div>
                        <button id="break-increment" onClick={this.handleBreakIncrement}> + </button>
                        <span id="break-length">{this.props.breakTime}</span>
                        <button id="break-decrement" onClick={this.handleBreakDecrement}> - </button>
                    </div>
                </div>
            </div>
        )
    }
}