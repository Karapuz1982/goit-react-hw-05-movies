import axios from 'axios';

const API_KEY = '3881a5cf915272758924613c1fa73f73';

export const getTrendingMovies = async () => {
  const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
  return response.data;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const getMovieCredits = async (movieId) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
  return response.data;
};

export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`);
  return response.data;
};
