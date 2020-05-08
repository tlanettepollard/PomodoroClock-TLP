//Start and Stop
import React, {Component} from 'react';

import WorkSettings from '../Settings/WorkSettings';
import BreakSettings from '../Settings/BreakSettings';

export default class Settings extends Component {
    
    render() {
    
        return ( 
            <div className="timer-controllers">
            <WorkSettings 
            sessionLength={this.state.sessionLength}
            isStart={this.state.isStart}
            onDecreaseSession={this.onDecreaseSession}
            onIncreaseSession={this.onIncreaseSession}
            /> 
            <BreakSettings 
            breakLength={this.state.breakLength}
            isStart={this.state.isStart}
            onDecreaseBreak={this.onDecreaseBreak}
            onIncreaseBreak={this.onIncreaseBreak}
            /> 
            </div>
        )
    }
}