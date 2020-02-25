const url = 'http://www.omdbapi.com/?&apikey=27b819ca&s=';
const movieResultTemplate = document.getElementById('template');
const searchResultsContainer = document.getElementById('searchResults');

function getInput(event){
    event.preventDefault();
    var title = event.target.elements[0].value;
    searchMovies(title);
}

// fetching  results from given url according to search value
async function searchMovies(title) {
    try {
        while (searchResultsContainer.lastChild) {
            searchResultsContainer.lastChild.remove();
        }

        let response = await fetch(url + title);

        let results = await response.json();
        console.log(results);        
        
        populateResultsContainer(results.Search)

    } catch (err) {
        console.log(err)
    }

}

function populateResultsContainer(searchResults) {
    searchResults.forEach(movie => {
        searchResultsContainer.appendChild(createMovieResult(movie))
    })
}

function createMovieResult(movie) {
    var movieResult = movieResultTemplate.cloneNode(true);
    
    movieResult.id = movie.imdID
    movieResult.children[0].src = movie.Poster;
    movieResult.children[1].textContent = movie.Title;
    movieResult.children[2].textContent = "Details";

    return movieResult;
}
