//jshint esversion:6

import { elements } from './base';

export const clearMovieDetailsModal = () => {
    elements.movieDetailsModal.innerHTML = '';
}

export const renderMovieDetailsModel = movieDetails => {
    console.log('here')
    const markup = `
            <div class="poster">
                <img class="movie-poster" src="${movieDetails.getPoster()}"/>
            </div>
            <p class="movie-title">${movieDetails.getTitle()}</p>
            <div class="text">
                <p id="genre">${movieDetails.getGenre()}</p>
                <p id="released">${movieDetails.getReleased()}</p>
                <p id="rated">${movieDetails.getRated()}</p>
                <p id="imdbRating">${movieDetails.getImdbRating()}</p>
                <p id="director">${movieDetails.getDirector()}</p>
                <p id="writer">${movieDetails.getWriter()}</p>
                <p id="actors">${movieDetails.getActors()}</p>
            </div>
            <p id="plot">${movieDetails.getPlot()}</p>
    `;
    console.log(markup)
    elements.movieDetailsModal.insertAdjacentHTML('beforeend', markup);
};