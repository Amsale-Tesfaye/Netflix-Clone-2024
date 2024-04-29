
const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  // fetchTrending: /trending/all/week?api_key=24ada6eba5694cbce8813c8c2d844b77&language=en-US

  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_generes=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_generes=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_generes=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_generes=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_generes=99`,
  fetchTvShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;



//  --url 'https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}with_networks=21' \
// /discover/tv?api_key=${API_KEY}with_networks=21' \


// fetchTrending: `/trending/movie/day?api_key=24ada6eba5694cbce8813c8c2d844b77&language=en-US`;  