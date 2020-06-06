import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ],
    };
  }
  render() {
    const { counters } = this.state;
    return (
      <div>
        {counters.map((count) => (
          <Counter key={count.id} value={count.value} id={counters.id}>
            <h1>Counter #{counters.id}</h1>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
