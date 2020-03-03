import { api_key } from '../config';

class Movie {
    constructor(movie) {
        this.imdbID = movie.imdbID
        this.title = movie.Title;
        this.poster = movie.Poster;
    }

    getImdbId() {
        return this.imdbID;
    }

    getTitle() {
        return this.title;
    }

    getPoster() {
        return this.poster;
    }

    async fetchMovieDetails() {
        try {
            const response = await fetch(`http://www.omdbapi.com/?&apikey=${api_key}&i=${this.imdbID}`);
            
            const result = await response.json();

            this.movieDetails = result;
            
        } catch (err) {
            console.log(err);
        }
    }
}

export default Movie;