import React, { Component } from "react";

class MovieRow extends Component {
  render() {
    return (
      <table className="result" key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img src={this.props.movie.poster_src} alt="poster" />
            </td>
            <td>
              <h1>{this.props.movie.title}</h1>
              <p id="overview">{this.props.movie.overview}</p>
              <h3>Rating: {this.props.movie.vote_average}/10</h3>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MovieRow;
