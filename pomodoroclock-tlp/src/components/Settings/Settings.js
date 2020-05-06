//Start and Stop
import React, {Component} from 'react';

import WorkControllers from '../Settings/WorkSettings';
import BreakControllers from '../Settings/BreakSettings';

export default class Settings extends Component {
    render() {
        return ( 
            <div className="timer-controllers" >
            <WorkControllers workTime={this.props.workTime}
            incrementWorkTime={this.props.incrementWorkTime}
            decrementWorkTime={this.props.decrementWorkTime}/> 
            <BreakControllers breakTime={this.props.breakTime}
            incrementBreakTime={this.props.incrementBreakTime}
            decrementBreakTime={this.props.decrementBreakTime}/> 
            </div>
        )
    }
}