//jshint esversion:6

import { elements } from './base';

export const getSearchQuery = () => elements.searchInput.value;

export const clearSearchQuery = () => {
    elements.searchInput.value = '';
}

export const clearResults = () => {
    elements.searchResults.innerHTML = '';
}

export const renderPageButton = (right) => {
    var markup = `
        <button>${right ? ">>" : "<<" }</button>
    `
    elements.searchResultsWrapper.insertAdjacentHTML(right ? 'beforeend' : 'afterbegin', markup);
}

const renderMovie = (movie, index) => {
    const markup = `
        <div class="movie-result">
            <img class="movie-poster" src=${movie.getPoster()} />
            <p class="movie-title">${movie.getTitle()}</p>
            <a class="movie-details-button" href="#id=${index}">Details</a>
        </div>
    `;
    elements.searchResults.insertAdjacentHTML('beforeend', markup);
};

const renderNotFound = () => {
    const markup = `
        <h2> No results found!</h2>
    `
    elements.searchResults.insertAdjacentHTML('beforeend', markup);    
}

export const renderSearchResults = (movies, page = 2, resPerPage = 4) => {
    if (movies) {
        // render results of currente page
        var start = (page - 1) * resPerPage;
        var end = page * resPerPage;
        if (start < 0) {
            start = 0;
        }

        if (end > movies.length) {
            end = movies.length - resPerPage;
        }

        movies.forEach((movie, index) => {
            if (index >= start && index < end) {
                renderMovie(movie, index);
            }
        });    
    } else {
        renderNotFound()
    }
    elements.searchResults.classList.remove("hidden");      
};