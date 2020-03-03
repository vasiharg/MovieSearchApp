//jshint esversion:6

import Search from './models/Search';
import Movie from './models/Movie';
import MovieDetails from './models/MovieDetails';
import * as searchView from './views/searchView';
import * as movieDetailsView from './views/movieDetailsView';

import { elements } from './views/base';

const searchResultsContainer = document.getElementById('searchResults');
const movieResultsBoxes = Array.from(document.getElementsByClassName('movie-result'));

// console.dir(movieResultsBoxes);
let currentSearchResults;

let currentMovieIndex = 0;

const state = {};

elements.searchForm.onsubmit = (event) => {
    event.preventDefault(); // prevent submitting the form and thus reloading page
    searchMovies()
};

const searchMovies = async () => {

    const query = searchView.getSearchQuery();
    
    console.log('Ati introdus: ' + query);
    if (query) {
        state.search = new Search(query);
        elements.searchResults.classList.add("hidden");      

        searchView.clearSearchQuery();
        searchView.clearResults();

        try {
            await state.search.fetchResults();

            state.movies = state.search.result ? state.search.result.map(movie => new Movie(movie)) : undefined

            console.log(state)

            searchView.renderSearchResults(state.movies);

        } catch (err) {
            console.log(err)
            alert('Something wrong with the search...:', err);
        }

    }

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
}

const getMovieDetails = async () => {
    const id = window.location.hash.replace('#id=', '');
    try {
        await state.movies[id].fetchMovieDetails()
        console.log(id)
        movieDetailsView.renderMovieDetailsModel(new MovieDetails(state.movies[id].movieDetails));
    } catch (err) {
        console.log(err)
    }
};

['hashchange'].forEach(event => window.addEventListener(event, getMovieDetails));
