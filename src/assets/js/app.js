//jshint esversion:6

import Search from './models/Search';
import Movie from './models/Movie';
import MovieDetails from './models/MovieDetails';
import * as searchView from './views/searchView';
import * as movieDetailsView from './views/movieDetailsView';

import { elements } from './views/base';

const state = {};

elements.searchForm.onsubmit = (event) => {
    event.preventDefault(); // prevent submitting the form and thus reloading page
    searchMovies()
};

elements.movieDetailsModalCloseButton.onclick = () => {
    movieDetailsView.clearMovieDetailsModal();
}

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

const getMovieDetails = async () => {
    const id = window.location.hash.replace('#id=', '');
    
    window.location.hash = '';

    try {
        await state.movies[id].fetchMovieDetails()
        console.log(id)
        movieDetailsView.renderMovieDetailsModel(new MovieDetails(state.movies[id].movieDetails));
    } catch (err) {
        console.log(err)
    }
};

['hashchange'].forEach(event => window.addEventListener(event, getMovieDetails));
