import React, {Component} from 'react';

export default class Sound extends Component {
    toggleSound = () => {
        this.props.sound === "on" ? this.props.setSound("off") : this.props.setSound("on")
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleSound}>
                <audio id="beep" preload="auto"
                src="https://goo.gl/65cBl1"
                ref={this.audioBeep}></audio>
                </button>
            </div>
        )
    }
}