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
    this.handleDelete = this.handleDelete.bind(this);
    // this.increment = this.increment.bind(this);
    // this.removeValue = this.removeValue.bind(this);
  }

  handleDelete(counterId) {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  }

  // increment(counter, value) {
  //   const { counters } = this.state;
  //   const index = counters.indexOf(counter);
  //   this.setState({
  //     counters: [
  //       ...counters.slice(0, index),
  //       {
  //         ...counter,
  //         value: counter.value + value,
  //       },
  //       ...counters.slice(index + 1),
  //     ],
  //   });
  // }

  // removeValue(counter) {
  //   const { counters } = this.state;
  //   const index = counters.indexOf(counter);
  //   this.setState({
  //     counters: [
  //       ...counters.slice(0, index),
  //       {
  //         ...counter,
  //         value: 0,
  //       },
  //       ...counters.slice(index + 1),
  //     ],
  //   });
  // }

  render() {
    const { counters } = this.state;
    return (
      <div>
        {counters.map((counter) => (
          <Counter
            // increment={this.increment}
            deleteCounter={this.handleDelete}
            // removeValue={this.removeValue}
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
