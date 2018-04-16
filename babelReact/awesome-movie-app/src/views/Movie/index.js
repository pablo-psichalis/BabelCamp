import React from 'react';

import { Link } from 'react-router-dom';

class Movie extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movie: {}
        }
    }

    componentDidMount() {
        this.setState({ id: this.props.match.params.id });
        const url =
            'https://api.themoviedb.org/3/movie/'
            + this.props.match.params.id
            + '?api_key='
            + process.env.REACT_APP_TMDB_API_KEY;

        console.log(url)

        fetch(url)
            .then(response => response.json())
            .then(result => this.setState({ movie: result }));
    }

    render() {
        const { movie } = this.state;
        return (
            <div className="overlay">
                <header className="w-100">
                    <h1>
                        {movie.title}
                    </h1>
                </header>
                <img
                    src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                    alt={movie.title}
                    style={{ width: "25%" }} />
                <p>{movie.overview}</p>
            </div>

        );
    }
}

export default Movie;