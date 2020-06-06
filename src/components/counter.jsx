import React, { Component } from "react";
import classNames from "classnames";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.counter.value,
      // tags: ["tag1", "tag2", "tag3"],
    };
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  increment() {
    return () => {
      this.setState({
        value: this.state.value + 1,
      });
    };
  }
  removeValue() {
    return () => {
      this.setState({
        value: 0,
      });
    };
  }
  // ListenEventDelete(id) {
  //   return () => {
  //     this.props.deleteCounter(id);
  //   };
  // }

  render() {
    const { value /*tags*/ } = this.state;
    // const { children } = this.props;
    const { deleteCounter, counter /*increment, removeValue*/ } = this.props;
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
          onClick={this.increment()}
        >
          Increment
        </button>
        <button
          onClick={() => deleteCounter(counter.id)}
          className="btn btn-danger btn-sm m-1"
        >
          Delete
        </button>
        <button
          onClick={this.removeValue()}
          className="btn btn-danger btn-sm m-1"
        >
          Remove Value
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
