import React, {Component} from 'react';


export default class Controllers extends Component {
    render() {
        return(
            <div className="settings">
                        <button id="start_stop">
                            Start/Stop
                            <i className="fa fa-play fa-2x"/>
                            <i className="fa fa-pause fa-2x"/>
                        </button>
                     
                        <button id="reset">Reset
                        < i className="fa fa-refresh fa-2x"/>
                        </button>
                    </div>
        )
    }
}