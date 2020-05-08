import React, {Component} from 'react';

export default class Sound extends Component {
    toggleSound = () => {
        this.props.sound === "on" ? this.props.setSound("off") : this.props.setSound("on")
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleSound}>
                Sound
                <i class="fa fa-volume-up fa-2x"/> 
                </button>
            </div>
        )
    }
}