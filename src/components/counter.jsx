import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    };
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    };

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    };



    render() {
        return (
            <div className="counter">
                <span className="badge badge-primary mr-2">{this.formatCount()}</span>
                <button className="btn btn-secondary primary btn-sm" onClick={() => this.increment()}>Increment</button>
            </div>
        );
    }
}

export default Counter;