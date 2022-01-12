import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MoviesApi from "../../common/api/MoviesApi";
import { Apikey } from "../../common/api/MoviesApikey";
export const fetchacynkmovies = createAsyncThunk(
  "movie/fetchacynkmovies", //To [genreting the life cycle]  in this reducer [pendenig,fullfilld,rejected]
  async (term) => {
    const response = await MoviesApi.get(
      `?apiKey=${Apikey}&s=${term}&type=movie`
    );
    return response.data;
  }
);
export const fetchacynkseries = createAsyncThunk(
  "movie/fetchacynkseries", //To [genreting the life cycle]  in this reducer [pendenig,fullfilld,rejected]
  async (term) => {
    const response = await MoviesApi.get(
      `?apiKey=${Apikey}&s=${term}&type=series`
    );
    return response.data;
  }
);
export const fetchDetilsApi = createAsyncThunk(
  "movie/fetchDetilsApi", //To [genreting the life cycle]  in this reducer [pendenig,fullfilld,rejected]
  async (id) => {
    const response = await MoviesApi.get(`?apiKey=${Apikey}&i=${id}&Plot=full`);
    return response.data;
  }
);
const initialState = { movie: {}, show: {}, selectMovieOrShow: {} };

const movieslice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    removefunction: (state, { payload }) => {
      state.selectMovieOrShow = payload;
    },
  },
  //Life cycle Api's
  extraReducers: {
    [fetchacynkmovies.pending]: () => {
      console.log("pending");
    },
    [fetchacynkmovies.fulfilled]: (state, { payload }) => {
      return { ...state, movie: payload };
    },
    [fetchacynkmovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchacynkseries.fulfilled]: (state, { payload }) => {
      return { ...state, show: payload };
    },
    [fetchDetilsApi.fulfilled]: (state, { payload }) => {
      return { ...state, selectMovieOrShow: payload };
    },
  },
});

export const { removefunction } = movieslice.actions;
export const getallmovies = (state) => state.movie.movie;
export const getSelectedMovieOrShow = (state) => state.movie.selectMovieOrShow;
export const showmovies = (state) => state.movie.show;

export default movieslice.reducer;
