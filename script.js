const genres = [
	{
		id: 28,
		name: 'Action',
	},
	{
		id: 12,
		name: 'Adventure',
	},
	{
		id: 16,
		name: 'Animation',
	},
	{
		id: 35,
		name: 'Comedy',
	},
	{
		id: 80,
		name: 'Crime',
	},
	{
		id: 99,
		name: 'Documentary',
	},
	{
		id: 18,
		name: 'Drama',
	},
	{
		id: 10751,
		name: 'Family',
	},
	{
		id: 14,
		name: 'Fantasy',
	},
	{
		id: 36,
		name: 'History',
	},
	{
		id: 27,
		name: 'Horror',
	},
	{
		id: 10402,
		name: 'Music',
	},
	{
		id: 9648,
		name: 'Mystery',
	},
	{
		id: 10749,
		name: 'Romance',
	},
	{
		id: 878,
		name: 'Science Fiction',
	},
	{
		id: 10770,
		name: 'TV Movie',
	},
	{
		id: 53,
		name: 'Thriller',
	},
	{
		id: 10752,
		name: 'War',
	},
	{
		id: 37,
		name: 'Western',
	},
];

const moviesImgs = [
	{
		title: 'The Vampire Diaries',
		imgUrl: 'https://image.tmdb.org/t/p/w440_and_h660_face/b3vl6wV1W8PBezFfntKTrhrehCY.jpg',
	},
	{
		title: 'Santana',
		imgUrl: 'https://image.tmdb.org/t/p/w440_and_h660_face/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg',
	},
	{
		title: 'Money Heist',
		imgUrl: 'https://image.tmdb.org/t/p/w440_and_h660_face/MoEKaPFHABtA1xKoOteirGaHl1.jpg',
	},
	{
		title: "The Last Sharknado: It's About Time",
		imgUrl: 'https://image.tmdb.org/t/p/w440_and_h660_face/uvMjNLot0dG7CX4HZPme2WDkMmE.jpg',
	},
	{
		title: 'Greyhound',
		imgUrl: 'https://image.tmdb.org/t/p/w440_and_h660_face/kjMbDciooTbJPofVXgAoFjfX8Of.jpg',
	},
	{
		title: 'The Crimes That Bind',
		imgUrl: 'https://image.tmdb.org/t/p/w440_and_h660_face/sDi6wKgECUjDug2gn4uODSqZ3yC.jpg',
	},
	{
		title: 'So Much Love to Give',
		imgUrl: 'https://image.tmdb.org/t/p/w440_and_h660_face/uSwCLbElGgz7HzWEHwnSfQtP2OC.jpg',
	},
	{
		title: 'The Walking Dead',
		imgUrl: 'https://image.tmdb.org/t/p/w440_and_h660_face/qgjP2OrrX9gc6M270xdPnEmE9tC.jpg',
	},
	{
		title: 'The Simpsons',
		imgUrl: 'https://image.tmdb.org/t/p/w440_and_h660_face/qcr9bBY6MVeLzriKCmJOv1562uY.jpg',
	},
	{
		title: 'Frozen II',
		imgUrl: 'https://image.tmdb.org/t/p/w440_and_h660_face/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg',
	},
	{
		title: 'The Flash',
		imgUrl: 'https://image.tmdb.org/t/p/w440_and_h660_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg',
	},
	{
		title: 'Riverdale',
		imgUrl: 'https://image.tmdb.org/t/p/w440_and_h660_face/4X7o1ssOEvp4BFLim1AZmPNcYbU.jpg',
	},
	{
		title: 'Origins',
		imgUrl: 'https://image.tmdb.org/t/p/w440_and_h660_face/sMO1v5TUf8GOJHbJieDXsgWT2Ud.jpg',
	},
	{
		title: '#Alive',
		imgUrl: 'https://image.tmdb.org/t/p/w440_and_h660_face/zqf711LsnQ5CcW3rISFw2t7OYzb.jpg',
	},
	{
		title: 'Avengers: Endgame',
		imgUrl: 'https://image.tmdb.org/t/p/w440_and_h660_face/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
	},
	{
		title: 'The Babysitter: Killer Queen',
		imgUrl: 'https://image.tmdb.org/t/p/w440_and_h660_face/imy1OoT1xddt2kqw6hhc4v01e8i.jpg',
	},
	{
		title: 'Onward',
		imgUrl: 'https://image.tmdb.org/t/p/w440_and_h660_face/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg',
	},
	{
		title: ' Iron Man',
		imgUrl: 'https://image.tmdb.org/t/p/w1280/78lPtwv72eTNqFW9COBYI0dWDJa.jpg',
	},
	{
		title: 'Iron Man 2',
		imgUrl: 'https://image.tmdb.org/t/p/w1280/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg',
	},
	{
		title: 'Iron Man 3',
		imgUrl: 'https://image.tmdb.org/t/p/w1280/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg',
	},
	{
		title: 'Avengers: Infinity War',
		imgUrl: 'https://image.tmdb.org/t/p/w1280/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
	},
	{
		title: 'The Avengers',
		imgUrl: 'https://image.tmdb.org/t/p/w1280/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
	},
	{
		title: 'Avengers: Age of Ultron',
		imgUrl: 'https://image.tmdb.org/t/p/w1280/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg',
	},
	{
		title: 'The Avengers',
		imgUrl: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/1p5thyQ4pCy876HpdvFARqJ62N9.jpg',
	},
	{
		title: 'Captain Marvel',
		imgUrl: 'https://image.tmdb.org/t/p/w1280/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
	},
	{
		title: 'Captain Marvel 2 ',
		imgUrl: 'https://image.tmdb.org/t/p/w1280/3BINA6kL4YvsTV66uBLqn64Glb1.jpg',
	},
];

const selectedGenres = [
	{
		className: 'action',
		groupTitle: 'Action',
		genreId: 28,
	},
	{
		className: 'adventure',
		groupTitle: 'Adventure',
		genreId: 12,
	},
	{
		className: 'comedy',
		groupTitle: 'Comedy',
		genreId: 35,
	},
	{
		className: 'crime',
		groupTitle: 'Crime',
		genreId: 80,
	},
	{
		className: 'romance',
		groupTitle: 'Romance',
		genreId: 10749,
	},
	{
		className: 'scienceFiction',
		groupTitle: 'Science Fiction',
		genreId: 878,
	},
];

const apiKey = '19f84e11932abbc79e6d83f82d6d1045';

const thmdConfig = {};

const trending = 'https://api.themoviedb.org/3/trending/all/week?api_key=947b0f0af52c9b74afa43eed2267820d&language=en-US';
const topRated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=947b0f0af52c9b74afa43eed2267820d&language=en-US';
// const apiHost = 'api.themoviedb.org';

var apiRoutes = {};

apiRoutes = {
	apiHost: 'api.themoviedb.org',
	apiKey: '19f84e11932abbc79e6d83f82d6d1045',
	config: {},
	apiConfigurationURL: function (path, baseUrl, params) {
		baseUrl = baseUrl ?? 'https://api.themoviedb.org';
		let url = new URL(path, baseUrl);
		return `https://${apiRoutes.apiHost}/3/configuration?api_key=${apiRoutes.apiKey}`;
	},
	apiDiscoverMoviesURL: function () {
		return `https://${apiRoutes.apiHost}/3/configuration?api_key=${apiRoutes.apiKey}`;
	},
	imageURL: function (filePath, imageSize, baseUrl) {
		baseUrl = baseUrl ?? 'https://image.tmdb.org/t/p/';
		imageSize = imageSize ?? 'w500';

		return `${baseUrl}${imageSize}${filePath}`;
	},
};

function getApiUrl(path, addParams = {}, baseUrl = 'https://api.themoviedb.org') {
	let url = new URL(path, baseUrl);
	url.searchParams.append('api_key', apiKey);
	url.searchParams.append('with_networks', 213);

	Object.keys(addParams).map((key) => {
		url.searchParams.append(key, addParams[key]);
	});

	return url.toString();
}

function getTHMDConfig() {
	console.log('CONFIG: ', apiRoutes.apiConfigurationURL());
	fetch(apiRoutes.apiConfigurationURL())
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error(response.statusText);
		})
		.then((data) => {
			console.log('CONFIG RECEIVE:  ', data);
			apiRoutes.config = data;
		})
		.catch((error) => {
			console.log(error);
		});
}

// Add movies to the front end
function addMovies(classSection, addMovies) {
	let imageUrl = 'https://image.tmdb.org/t/p/original/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg';
	let imageElement = '<img src="https://image.tmdb.org/t/p/original/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg"/>';

	let moviesCollectionElement = document.querySelector(classSection);

	if (moviesCollectionElement !== undefined) {
		addMovies.map((movie) => {
			let divMovieEle = document.createElement('div');
			divMovieEle.classList.add('movie');

			let movieNewEle = document.createElement('img');
			movieNewEle.setAttribute('src', movie.imgUrl);
			movieNewEle.setAttribute('alt', movie.title);

			let titleEle = document.createElement('span');
			titleEle.classList.add('movie__title');
			titleEle.innerHTML = movie.title;

			divMovieEle.appendChild(movieNewEle);
			divMovieEle.appendChild(titleEle);

			moviesCollectionElement.appendChild(divMovieEle);
		});
	}
}

Array.prototype.pickRandomItems = function (numberItems = 0, removeFromArray = false) {
	let thisArray = [...this];
	removeFromArray = false;
	if (removeFromArray === true) thisArray = this;
	if (!(numberItems > 0)) numberItems = thisArray.length;
	let arrayReturned = [];
	// console.log(thisArray.length);
	Array(numberItems)
		.fill()
		.map((item) => {
			let noItemsInArray = thisArray.length;
			if (noItemsInArray > 0) {
				random = Math.trunc(Math.random() * noItemsInArray);
				arrayReturned = [...arrayReturned, thisArray.splice(random, 1)[0]];
			}
		});
	// console.log(arrayReturned);
	return arrayReturned;
};

Array.prototype.shuffle = function () {
	for (let i = this.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[this[i], this[j]] = [this[j], this[i]];
	}
	return this;
};

function arrayShuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

window.onload = () => {
	getTHMDConfig();

	fetchTrending();

	addMovies('.userFavourites .movies__container', moviesFavourite);
	addMovies('.netflixOriginals .movies__container', moviesImgs.pickRandomItems());
	// addMovies('.netflixOriginals .movies__container', moviesImgs.pickRandomItems(10,true));
	addMovies('.trendingNow .movies__container', moviesImgs.pickRandomItems(10, true));
	addMovies('.topRated .movies__container', moviesImgs.pickRandomItems(10, true));
	// addMovies('.original__movies');
	// addMovies('.movies .movies__container');
	// addMovies('.movies .movies__container');
	// console.log(moviesImgs.length);
	// console.log(moviesImgs.pickRandomItems(5, true));
	// console.log(moviesImgs.length);

	// addMovies('.reconmended .movies__container', moviesImgs.pickRandomItems(10, true));
	fetchMovies('.action .movies__container', 28);
	fetchMovies('.adventure .movies__container', 12);
	// fetchMovies('.comedy .movies__container', 35);
	// fetchMovies('.crime .movies__container', 80);
	// fetchMovies('.romance .movies__container', 10749);
	// fetchMovies('.scienceFiction .movies__container', 878);

	// let mixedGenres = selectedGenres.shuffle();

	addMoviesRowGenes();
};

function fetchMovies(classSection, genre) {
	let url = getApiUrl('/3/discover/movie', { with_genres: genre });
	fetch(url)
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error(response.statusText);
		})
		.then((data) => {
			// console.log(data);
			addMoviesJSON(classSection, data.results);
		})
		.catch((error) => {
			console.log(error);
		});
}

function addMoviesJSON(classSection, data) {
	// console.log(data);
	let moviesCollectionElement = document.querySelector(classSection);

	document.querySelector('.movies__total');

	// console.log('before:  ', data);
	// data = data.shuffle();
	data = arrayShuffle(data);
	// console.log('SHUFFLE: ', data);
	// console.log(moviesCollectionElement);

	data.map((item) => {
		// console.log(item);
		elm = addMoviesItemJSON(item);
		moviesCollectionElement.appendChild(elm);
	});
}

function thmdImageUrl(filePath, imageSize, baseUrl) {
	baseUrl = baseUrl ?? 'https://image.tmdb.org/t/p/';
	imageSize = imageSize ?? 'w500';

	return `${baseUrl}${imageSize}${filePath}`;
}

// thmdImageUrl.prototype = {
// 	filePath: Prototype.String.isRequire,
// 	imagePath: '',
// };

function addMoviesItemJSON(movieItem) {
	const lanscape = movieItem.backdrop_path !== undefined && movieItem.backdrop_path !== null;

	let divMovieEle = document.createElement('div');
	divMovieEle.classList.add('movie');
	// divMovieEle.classList.add('lanscape');

	let movieNewEle = document.createElement('img');
	let test = `https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`;
	let posterPath = 'https://image.tmdb.org/t/p/w500/' + movieItem.poster_path;

	let backdropPath = 'https://image.tmdb.org/t/p/w500/' + movieItem.backdrop_path;

	movieNewEle.setAttribute('src', posterPath);
	movieNewEle.setAttribute('alt', movieItem.original_title);

	if (lanscape) {
		movieNewEle.setAttribute('src', backdropPath);
		divMovieEle.classList.add('lanscape');
		movieNewEle.classList.add('lanscape');
	}

	let titleEle = document.createElement('span');
	titleEle.classList.add('movie__title');
	titleEle.innerHTML = movieItem.original_title;

	divMovieEle.appendChild(movieNewEle);
	divMovieEle.appendChild(titleEle);

	return divMovieEle;
}

function getUrl(baseUrl, path, addParams = {}) {
	let url = new URL(path, baseUrl);

	Object.keys(addParams).map((key) => {
		url.searchParams.append(key, addParams[key]);
	});

	return url.toString();
}

function fetchTrending() {
	let url = getApiUrl('/3/trending/all/week');
	fetch(url)
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error(response.statusText);
		})
		.then((data) => {
			// console.log(data);
			sectionFeature(data.results);
			$('#featured').slick({
				speed: 300,
				autoplay: true,
				autoplaySpeed: 5000,
				prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i><span>Previous</span></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i><span>Next</span></button>',
			});
		})
		.catch((error) => {
			console.log(error);
		});
}

function sectionFeature(data) {
	let moviesCollectionElement = document.querySelector('#featured');

	data = data.splice(0, 5);

	data.map((item) => {
		console.log(item);
		elm = elementFeature(item);
		moviesCollectionElement.appendChild(elm);
	});
}

function elementFeature(movieItem) {
	let imageUrl = getUrl('https://image.tmdb.org', `/t/p/original${movieItem.backdrop_path}`);

	let featureEle = document.createElement('div');
	featureEle.style = `background-image: url('${imageUrl}')`;
	featureEle.classList.add('featured');

	let titleEle = document.createElement('h2');
	titleEle.innerHTML = movieItem.name || movieItem.title;
	featureEle.appendChild(titleEle);

	let divButtonsEle = document.createElement('div');
	divButtonsEle.classList.add('featured__buttons');
	featureEle.appendChild(divButtonsEle);

	let buttonPlayEle = document.createElement('button');
	buttonPlayEle.classList.add('button__play');
	buttonPlayEle.innerHTML = '<i class="fas fa-play"></i>Play';
	divButtonsEle.appendChild(buttonPlayEle);

	let buttonMoreInfoEle = document.createElement('button');
	buttonMoreInfoEle.innerHTML = 'My List';
	divButtonsEle.appendChild(buttonMoreInfoEle);

	let descriptionEle = document.createElement('div');
	descriptionEle.classList.add('featured__description');
	descriptionEle.innerHTML = truncateString(movieItem.overview, 128);
	featureEle.appendChild(descriptionEle);

	return featureEle;
}

function addMoviesRowGenes() {
	let movieRowsContatiner = document.querySelector('body main');

	let mixedGenres = arrayShuffle(genres);

	mixedGenres.map((item) => {
		fetchMoviesJSON({ genres: item.id }).then((movies) => {
			movies = arrayShuffle(movies);

			console.log(movies);
			movieRow = elementMoviesRow({ title: item.name, genre: item.id, movies: movies });
			movieRowsContatiner.appendChild(movieRow);
		});
	});
}

function elementMoviesRow({ title, movies, genre }) {
	const regEx = new RegExp(/\s/gi);

	let divMoivesEle = document.createElement('div');
	divMoivesEle.classList.add('movies');
	divMoivesEle.classList.add(`${title.replace(regEx, '').toLowerCase()}`);
	divMoivesEle.classList.add(`genre_${genre}`);

	let divMoivesHeaderEle = document.createElement('div');
	divMoivesHeaderEle.classList.add('original__header');
	divMoivesHeaderEle.innerHTML = title;
	divMoivesEle.appendChild(divMoivesHeaderEle);

	let divMoivesContainerEle = document.createElement('div');
	divMoivesContainerEle.classList.add('movies__container');
	divMoivesContainerEle.classList.add('lanscape');

	divMoivesEle.appendChild(divMoivesContainerEle);

	movies.map((movie) => {
		// console.log(movie);
		if (movie.poster_path !== undefined && movie.poster_path !== null && movie.poster_path !== undefined && movie.backdrop_path !== null) {
			movieEl = addMoviesItemJSON(movie);
			divMoivesContainerEle.appendChild(movieEl);
		}
	});

	return divMoivesEle;
}

async function fetchMoviesJSON({ genres }) {
	let url = getApiUrl('/3/discover/movie', { with_genres: genres });
	return await fetch(url)
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error(response.statusText);
		})
		.then((data) => {
			return data.results;
		})
		.catch((error) => {
			console.log(error);
			return [];
		});
}

function truncateString(str, num) {
	if (str.length <= num) {
		return str;
	}
	return str.slice(0, num) + '...';
}
