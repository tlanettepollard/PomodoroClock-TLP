//Break and Session

import React, {Component} from 'react';


export default class Settings extends Component {
    handleSessionIncrement = () => {
        this.props.sessionIncrement()
    }

    handleSessionDecrement = () => {
        this.props.sessionDecrement()
    }

    handleBreakIncrement = () => {
        this.props.breakIncrement()
    }

    handleBreakDecrement = () => {
        this.props.breakDecrement()
    }


    render() {
        return (
            <div className="settings">
                <div className="settings-section">
                    <label id="session-label">Session Length</label>
                    <div>
                        <button className="btn-setting" id="sesson-increment" on click={this.handleSessionIncrement}>+</button>
                        <span id="session-length">{this.props.workTime}</span>
                        <button className="btn-setting" id="session-decrement" onClick={this.handleSessionDecrement}>-</button>
                    </div>

                </div>
                <div className="settings-section">
                    <label id="break-label">Break Length</label>
                    <div>
                        <button className="btn-setting" onClick={this.handleBreakIncrement}>+</button>
                        <span id="break-length">{this.props.breakTime}</span>
                        <button className="btn-setting" onClick={this.handleBreakDecrement}>-</button>
                    </div>
                </div>  
            </div>
        
        )
    }
}