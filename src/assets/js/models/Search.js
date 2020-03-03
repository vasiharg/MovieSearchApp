import { api_key } from '../config';

class Search {
    constructor(query) {
        this.query = query;
    }

    async fetchResults() {
        try {        
            console.log('Criteriul de cautare: ' + this.query)
            const response = await fetch(`http://www.omdbapi.com/?&apikey=${api_key}&s=${this.query}`);

            const result = await response.json();
                
            this.result = result.Search;
        } catch (err) {
            console.log(err);
        }
    }
}

export default Search;