//jshint esversion:6

import { elements } from './base';

export const clearMovieDetailsModal = () => {
    console.log(elements.movieDetailsModalContent.children)
    elements.movieDetailsModalContent.children[1].remove();
    elements.movieDetailsModalContent.children[0].remove();
    elements.movieDetailsModal.style.display = "none";
}

export const renderMovieDetailsModel = movieDetails => {
    console.log('here')
    const markup = `
        <div class="movie-details">
            <img class="movie-details-poster" src="${movieDetails.getPoster()}"/>
            <div>
                <h1 class="movie-details-title"> ${movieDetails.getTitle()} </h1>
                <div class="movie-details-info">
                    <p id="genre"><b>Genre: </b>${movieDetails.getGenre()}</p>
                    <p id="released"><b>Released: </b>${movieDetails.getReleased()}</p>
                    <p id="rated"><b>Rated: </b>${movieDetails.getRated()}</p>
                    <p id="imdbRating"><b>IMDB Rating: </b>${movieDetails.getImdbRating()}</p>
                    <p id="director"><b>Director: </b>${movieDetails.getDirector()}</p>
                    <p id="writer"><b>Writer: </b>${movieDetails.getWriter()}</p>
                    <p id="actors"><b>Actors: </b>${movieDetails.getActors()}</p>
                </div>
            </div>
        </div>
        <div class="movie-details-plot">
            <h2 class="movie-details-title">
                Plot
            </h2>
            <p id="plot">${movieDetails.getPlot()}</p>
        </div>
    `;
  
    elements.movieDetailsModalContent.insertAdjacentHTML('afterbegin', markup);
    elements.movieDetailsModal.style.display = "block";
};