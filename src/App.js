import React, { Component } from 'react';
// import './App.css';
import { getMovies } from './services/fakeMovieService'
// import Counter from './components/counter'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies(),
      count: getMovies().length
    }
  }
  deleteMovie(movieId) {
    return () => {
      const { movies, count } = this.state;
      let newCout = count - 1;
      const newData = movies.filter(item => {
        return item._id !== movieId
      })
      this.setState({
        movies: newData,
        count: newCout
      })
    }
  }
  render() {
    const { movies, count } = this.state;
    return (
      <div className="contrainer" >
        {/* <Counter /> */}
        {count > 0 && <span>Showing {count} movies in the database.</span>}
        {count === 0 && <span>There are no movies in the database</span>}
        {count > 0 && <div className="row">
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
                {movies.map((movie, index) => (<tr key={index}>
                  <th scope="row">{movie.title}</th>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td><button className="btn btn-danger" onClick={this.deleteMovie(movie._id)}>Delete</button></td>
                </tr>))}
              </tbody>
            </table>
          </div>
        </div>}
      </div>
    );
  }
}

export default App;
