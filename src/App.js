import React, { Component } from "react";
// import "./App.css";
// import { getMovies } from "./services/fakeMovieService";
// import Counter from './components/counter'
import Counters from "./components/counters";
import NavBar from "./components/navbar";
class App extends Component {
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
    this.increment = this.increment.bind(this);
    this.removeValue = this.removeValue.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleDelete(counterId) {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  }

  increment(counter, value) {
    // C1
    // const { counters } = this.state;
    // const index = counters.indexOf(counter);
    // this.setState({
    //   counters: [
    //     ...counters.slice(0, index),
    //     {
    //       ...counter,
    //       value: counter.value + value,
    //     },
    //     ...counters.slice(index + 1),
    //   ],
    // });

    // C2
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value = counter.value + value;
    this.setState({
      counters,
    });
  }

  removeValue(counter) {
    // C1
    // const { counters } = this.state;
    // const index = counters.indexOf(counter);
    // this.setState({
    //   counters: [
    //     ...counters.slice(0, index),
    //     {
    //       ...counter,
    //       value: 0,
    //     },
    //     ...counters.slice(index + 1),
    //   ],
    // });
    // C2
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value = 0;
    this.setState({ counters });
  }
  reset() {
    const { counters } = this.state;
    const newData = counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: newData });
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     movies: getMovies(),
  //     count: getMovies().length,
  //   };
  // }
  // deleteMovie = (movieId) => {
  //   const movies = this.state.movies.filter((movie) => movie._id !== movieId);
  //   this.setState({
  //     movies: movies,
  //     count: this.state.count - 1,
  //   });
  // };
  render() {
    // const { movies, count } = this.state;
    // if (count === 0) return <span>There are no movies in the databases.</span>;
    const { counters } = this.state;
    return (
      <React.Fragment>
        <NavBar totalCounters={counters.filter((c) => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={counters}
            onReset={this.reset}
            onIncreament={this.increment}
            onRemoveValue={this.removeValue}
            onDelete={this.handleDelete}
          />
        </main>

        {/* <Counter /> */}
        {/* <div className="container">
          <p>Showing {count} movies in the databases.</p>
          <div className="row">
            <div className="col">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {movies.map((movie, index) => (
                    <tr key={index}>
                      <th scope="row">{movie.title}</th>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => this.deleteMovie(movie._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}

export default App;
