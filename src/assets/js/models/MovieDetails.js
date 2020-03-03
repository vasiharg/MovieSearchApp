import Movie from './Movie'

class MovieDetails extends Movie {
    constructor(movie) {
       super(movie)
       this.genre = movie.Genre;
       this.released = movie.Released;
       this.rated = movie.Rated;
       this.imdbRating = movie.imdbRating;
       this.director = movie.Director;
       this.writer = movie.Writer;
       this.actors = movie.Actors;
       this.plot = movie.Plot;
    }

    getGenre() {
        return this.genre;
    }
    getReleased() {
        return this.released;
    }
    getRated() {
        return this.rated;
    }
    getImdbRating() {
        return this.imdbRating;
    }
    getDirector() {
        return this.director;
    }
    getWriter() {
        return this.writer;
    }
    getActors() {
        return this.actors;
    }
    getPlot() {
        return this.plot;
    }
}

export default MovieDetails;