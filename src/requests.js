const API_KEY = "2be7d4ca4a0d442cf83c0127303d7060";
const requests = {
	fetchMovieGenres: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchDiscover: `/discover/movie?api_key=${API_KEY}&language=en-US`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
};
export default requests;
