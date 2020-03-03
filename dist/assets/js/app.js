/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_Movie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/Movie.js */ \"./src/assets/js/model/Movie.js\");\n/* harmony import */ var _model_MovieDetails_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/MovieDetails.js */ \"./src/assets/js/model/MovieDetails.js\");\n\r\n\r\n\r\nconsole.log(_model_Movie_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _model_MovieDetails_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n\r\nconst searchResultsContainer = document.getElementById('searchResults');\r\nconst movieResultsBoxes = Array.from(document.getElementsByClassName('movie-result'));\r\n\r\n// console.dir(movieResultsBoxes);\r\nlet currentSearchResults;\r\n\r\nlet currentMovieIndex = 0;\r\n\r\nfunction searchMovies(event) {\r\n    event.preventDefault(); // prevent submitting the form and thus reloading page\r\n    var title = event.target.elements[0].value; // we get title of movie from search box\r\n    \r\n    fetchMovies(title); //\r\n}\r\n\r\n\r\n// fetching  results from given url according to search value\r\nasync function fetchMovies(title) {\r\n    try {        \r\n        let response = await fetch('http://www.omdbapi.com/?&apikey=27b819ca&s=' + title);\r\n\r\n        let results = await response.json();\r\n\r\n        console.log(results.Search)\r\n\r\n        currentSearchResults = results.Search && results.Search.map(movie => new _model_Movie_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](movie))\r\n\r\n        console.log(currentSearchResults)\r\n\r\n        if (currentSearchResults) {\r\n            displaySearchResults();        \r\n            searchResultsContainer.classList.remove('hidden');\r\n        } else {\r\n            searchResultsContainer.classList.add('hidden');            \r\n        }\r\n            \r\n    } catch (err) {\r\n        console.log(err);\r\n    }\r\n}\r\n\r\nfunction displaySearchResults() {\r\n    movieResultsBoxes.forEach((movieBox, index) => {\r\n        var movieIndex = currentMovieIndex + index;\r\n\r\n        if (movieIndex >= currentSearchResults.length) {\r\n            movieBox.classList.add(\"hidden\") // not fully styled\r\n        } else {\r\n            movieBox.classList.remove(\"hidden\");\r\n            movieBox.children[0].src = currentSearchResults[movieIndex].getPoster();\r\n            movieBox.children[1].textContent = currentSearchResults[movieIndex].getTitle();\r\n            movieBox.children[2].id = movieIndex;\r\n            console.log(movieBox.children[2])\r\n        }\r\n    });\r\n}\r\n\r\nfunction shiftMovies(right) {\r\n    currentMovieIndex += right ? 4 : -4;\r\n\r\n    // reached first movie in the results\r\n    if (currentMovieIndex < 0) {\r\n        currentMovieIndex = 0;\r\n    }\r\n    // next shift will reach max so we display last 4\r\n    if (currentMovieIndex + 4 >= currentSearchResults.length) {\r\n        currentMovieIndex = currentSearchResults.length - 4;\r\n    }\r\n    \r\n    console.log(currentMovieIndex)\r\n    displaySearchResults();\r\n}\r\n\r\nfunction displayDetails(index) {\r\n    fetchDetails(currentSearchResults[index].getImdbId())\r\n}\r\n\r\nasync function fetchDetails(imdbID) {\r\n    try {\r\n        let response = await fetch('http://www.omdbapi.com/?&apikey=27b819ca&i=' + imdbID);\r\n        let result = await response.json();\r\n        \r\n        console.log(new _model_MovieDetails_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](result));\r\n\r\n    } catch (err) {\r\n        console.log(err);\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/model/Movie.js":
/*!**************************************!*\
  !*** ./src/assets/js/model/Movie.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Movie {\r\n    constructor(movie) {\r\n        this.imdbID = movie.imdbID\r\n        this.title = movie.Title;\r\n        this.poster = movie.Poster;\r\n    }\r\n\r\n    getImdbId() {\r\n        return this.imdbID;\r\n    }\r\n\r\n    getTitle() {\r\n        return this.title;\r\n    }\r\n\r\n    getPoster() {\r\n        return this.poster;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\n\n//# sourceURL=webpack:///./src/assets/js/model/Movie.js?");

/***/ }),

/***/ "./src/assets/js/model/MovieDetails.js":
/*!*********************************************!*\
  !*** ./src/assets/js/model/MovieDetails.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass MovieDetails extends Movie {\r\n    constructor(movie) {\r\n       super(movie)\r\n       this.genre = movie.Genre;\r\n       this.released = movie.Released;\r\n       this.rated = movie.Rated;\r\n       this.imdbRating = movie.imdbRating;\r\n       this.director = movie.Director;\r\n       this.writer = movie.Writer;\r\n       this.actors = movie.Actors;\r\n       this.plot = movie.Plot;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieDetals);\n\n//# sourceURL=webpack:///./src/assets/js/model/MovieDetails.js?");

/***/ })

/******/ });