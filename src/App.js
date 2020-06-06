import React, { Component } from "react";
// import "./App.css";
// import { getMovies } from "./services/fakeMovieService";
// import Counter from './components/counter'
import Counters from "./components/counters";
class App extends Component {
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
    return (
      <React.Fragment>
        <Counters />
        {/* <Counter /> */}
        {/* <div className="contrainer">
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
