import React, { Component } from "react";
import MovieRow from "./components/MovieRow.js";
import $ from "jquery";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // the search function itself
  preformSearch(searchInput) {
    const urlString =
      "https://api.themoviedb.org/3/search/movie?query=" +
      searchInput +
      "&api_key=aca3bf219ffbea1bae6e7629a73f62c9&language=en-US&page=1&include_adult=false";
    $.ajax({
      url: urlString,
      success: searchResults => {
        const results = searchResults.results;

        let movieRows = [];

        results.forEach(movie => {
          console.log(movie);
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          const movieRow = <MovieRow movie={movie} key={movie.id} />;
          movieRows.push(movieRow);
        });

        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.log("failed, woops");
      }
    });
  }

  searchChangeHandler(event) {
    const searchTerm = event.target.value;
    this.preformSearch(searchTerm);
  }

  render() {
    return (
      <div className="App">
        <table className="headerBar">
          <tbody>
            <tr>
              <td>
                <i className="fas fa-ticket-alt" />
              </td>

              <td>
                <h1>movieFy</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input
          placeholder="Search a movie..."
          onChange={this.searchChangeHandler.bind(this)}
        />
        <div className="main">{this.state.rows}</div>
        <div className="info">
          <h1>How does it work?</h1>
          <p>
            Search a movie title to reveal its rating and a short description.
          </p>
          <h4>
            {" "}
            movieFy uses an API provided by{" "}
            <a href="https://www.themoviedb.org/">TMDb</a>.
          </h4>
          <footer id="copyright">
            <span>A project by Nick Minovsky </span>
            <a href="https://github.com/NickMinovsky">
              <i className="fab fa-github" />
            </a>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
