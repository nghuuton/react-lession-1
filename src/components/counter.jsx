import React, { Component } from "react";
import classNames from "classnames";
class Counter extends Component {
  state = {
    value: this.props.value,
    // tags: ["tag1", "tag2", "tag3"],
  };
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  increment(productId) {
    return () => {
      this.setState({
        count: this.state.value + productId,
      });
    };
  }

  render() {
    const { value /*tags*/ } = this.state;
    // const { children } = this.props;
    return (
      <div className="counter">
        {/* {children} */}
        <span
          className={classNames("badge badge-primary mr-2", {
            "badge-warning": value === 0,
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
        {/* <ul>
          {tags.length > 0 &&
            tags.map((item, index) => <li key={index}>{item}</li>)}
          {tags.length === 0 && <li>Nothing in here!</li>}
        </ul> */}
      </div>
    );
  }
}

export default Counter;
