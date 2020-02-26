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
}

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
}


const searchResultsContainer = document.getElementById('searchResults');
const movieResultsBoxes = Array.from(document.getElementsByClassName('movie-result'));

// console.dir(movieResultsBoxes);
let currentSearchResults;

let currentMovieIndex = 0;

function searchMovies(event) {
    event.preventDefault(); // prevent submitting the form and thus reloading page
    var title = event.target.elements[0].value; // we get title of movie from search box
    
    fetchMovies(title); //
}


// fetching  results from given url according to search value
async function fetchMovies(title) {
    try {        
        let response = await fetch('http://www.omdbapi.com/?&apikey=27b819ca&s=' + title);

        let results = await response.json();

        console.log(results.Search)

        currentSearchResults = results.Search && results.Search.map(movie => new Movie(movie))

        console.log(currentSearchResults)

        if (currentSearchResults) {
            displaySearchResults();        
            searchResultsContainer.classList.remove('hidden');
        } else {
            searchResultsContainer.classList.add('hidden');            
        }
            
    } catch (err) {
        console.log(err);
    }
}

function displaySearchResults() {
    movieResultsBoxes.forEach((movieBox, index) => {
        var movieIndex = currentMovieIndex + index;

        if (movieIndex >= currentSearchResults.length) {
            movieBox.classList.add("hidden") // not fully styled
        } else {
            movieBox.classList.remove("hidden");
            movieBox.children[0].src = currentSearchResults[movieIndex].getPoster();
            movieBox.children[1].textContent = currentSearchResults[movieIndex].getTitle();
            movieBox.children[2].id = movieIndex;
            console.log(movieBox.children[2])
        }
    });
}

function shiftMovies(right) {
    currentMovieIndex += right ? 4 : -4;

    // reached first movie in the results
    if (currentMovieIndex < 0) {
        currentMovieIndex = 0;
    }
    // next shift will reach max so we display last 4
    if (currentMovieIndex + 4 >= currentSearchResults.length) {
        currentMovieIndex = currentSearchResults.length - 4;
    }
    
    console.log(currentMovieIndex)
    displaySearchResults();
}

function displayDetails(index) {
    fetchDetails(currentSearchResults[index].getImdbId())
}

async function fetchDetails(imdbID) {
    try {
        let response = await fetch('http://www.omdbapi.com/?&apikey=27b819ca&i=' + imdbID);
        let result = await response.json();
        
        console.log(new MovieDetails(result));

    } catch (err) {
        console.log(err);
    }

}