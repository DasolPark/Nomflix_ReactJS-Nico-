import axios from "axios";

const params = {
  api_key: "f596dd7d9a5491647a16554b105ed63c",
  language: "en-US"
};

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

export const moviesApi = {
  nowPlaying: () =>
    api.get("movie/now_playing", {
      params
    }),
  upcoming: () =>
    api.get("movie/upcoming", {
      params
    }),
  popular: () =>
    api.get("movie/popular", {
      params
    }),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        api_key: params.api_key,
        language: params.language,
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        api_key: params.api_key,
        language: params.language,
        query: encodeURIComponent(term)
      }
    })
};

export const tvApi = {
  topRated: () =>
    api.get("tv/top_rated", {
      params
    }),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        api_key: params.api_key,
        language: params.language,
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        api_key: params.api_key,
        language: params.language,
        query: encodeURIComponent(term)
      }
    })
};
