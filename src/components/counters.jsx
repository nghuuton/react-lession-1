import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      counters,
      onIncreament,
      onDelete,
      onRemoveValue,
      onReset,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm mb-1">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            increment={onIncreament}
            deleteCounter={onDelete}
            removeValue={onRemoveValue}
            counter={counter}
            key={counter.id}
          >
            {/* <h1>Counter #{counters.id}</h1> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
