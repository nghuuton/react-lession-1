import React, { Component } from "react";
import classNames from "classnames";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  increment(productId) {
    return () => {
      this.setState({
        count: this.state.count + productId,
      });
    };
  }

  render() {
    const { count, tags } = this.state;
    return (
      <div className="counter">
        <span
          className={classNames("badge badge-primary mr-2", {
            "badge-warning": count === 0,
          })}
        >
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary primary btn-sm"
          onClick={this.increment(1)}
        >
          Increment
        </button>
        <ul>
          {tags.length > 0 &&
            tags.map((item, index) => <li key={index}>{item}</li>)}
          {tags.length === 0 && <li>Nothing in here!</li>}
        </ul>
      </div>
    );
  }
}

export default Counter;
