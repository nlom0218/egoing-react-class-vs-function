import React, { Component } from 'react';

class ClassComp extends Component {
    state = {
        num: this.props.initNum,
        date: new Date().toString()
    }
    render() {
        return (
            <div className="container">
                <h2>Class Styel Component</h2>
                <p>Number: {this.state.num}</p>
                <p>Date: {this.state.date}</p>
                <input type="button" value="Random" onClick={() => {
                    const num = Math.floor((Math.random() * 10) + 1)
                    this.setState({ num })
                }} />
                <input type="button" value="Date" onClick={() => {
                    const date = new Date().toString()
                    this.setState({ date })
                }} />
            </div >
        );
    }
}

export default ClassComp;