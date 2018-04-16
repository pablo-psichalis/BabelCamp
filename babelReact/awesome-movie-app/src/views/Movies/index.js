import React from 'react';

import { Link } from 'react-router-dom';

class Movies extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
        const url =
            'https://api.themoviedb.org/3/discover/movie?api_key='
            + process.env.REACT_APP_TMDB_API_KEY;

        fetch(url)
            .then(response => response.json())
            .then(json => json.results)
            .then(results => this.setState({ movies: results }));
    }

    render() {
        const { movies } = this.state;
        return (
            <div className="row movie-list-wrapper">
                {
                    movies.map((movie, i) => {
                        return (
                            <article
                                key={i}
                                className="col-md-3 my-4 movie-item"
                            >
                                <div className="overlay">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                                        alt={movie.title}
                                        style={{ width: "100%" }} />
                                    <h2>
                                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                                    </h2>
                                    <p>{movie.overview}</p>
                                </div>

                            </article>

                        );
                    })
                }
            </div>
        );
    }

};

export default Movies;