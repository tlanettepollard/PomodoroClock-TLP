import React, { Component } from 'react';

export default class Controller extends Component {
    render() {
        
        return (
            <div className="controller">
                <button className="controller-btn" id="start_stop" onClick={this.props.onStartStop}>
                    {this.props.isStart ? 'Stop' : 'Start'}
                    <i className="fa fa-play fa-2x"></i>
                    <i className="fa fa-pause fa-2x"></i>
                </button>
                <button className="controller-btn" id="reset" onClick={this.props.onReset}> 
                   <i className="fa fa-refresh fa-2x"></i>
                </button>
            </div>
        )
    }
}