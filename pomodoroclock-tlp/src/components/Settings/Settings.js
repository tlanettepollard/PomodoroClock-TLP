//Start and Stop
import React, {Component} from 'react';

import WorkSettings from '../Settings/WorkSettings';
import BreakSettings from '../Settings/BreakSettings';

export default class Settings extends Component {
    
    render() {
        return ( 
            <div className="timer-controllers" >
            <WorkSettings workTime={this.props.workTime}
            incrementWorkTime={this.props.incrementWorkTime}
            decrementWorkTime={this.props.decrementWorkTime}/> 
            <BreakSettings breakTime={this.props.breakTime}
            incrementBreakTime={this.props.incrementBreakTime}
            decrementBreakTime={this.props.decrementBreakTime}/> 
            </div>
        )
    }
}