import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./Movies/movieslice";

export const store = configureStore({
  reducer: { movie: MoviesReducer },
});
