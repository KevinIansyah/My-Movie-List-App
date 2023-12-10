const CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  BASE_IMAGE: 'https://image.tmdb.org/t/p/w1280',
  CACHE_NAME: 'movie-list-V1',
  DATABASE_NAME: 'movie-list-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'movie-list',
  API_AUTHORIZATION : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGMxOTVhMTZjMDRiNTM3Yzc3MjAwZTAyODc4NGNhNCIsInN1YiI6IjY1MDkwZDBjMTA5ZGVjMDBhZWIwYmE0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ca3ui--oQ9O47Ab9QGIKsw2qN4vv7Vl1vlg24x5PdNs',
  OPTIONS : {
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGMxOTVhMTZjMDRiNTM3Yzc3MjAwZTAyODc4NGNhNCIsInN1YiI6IjY1MDkwZDBjMTA5ZGVjMDBhZWIwYmE0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ca3ui--oQ9O47Ab9QGIKsw2qN4vv7Vl1vlg24x5PdNs',
      },
      params: {},
  }
};

export default CONFIG;