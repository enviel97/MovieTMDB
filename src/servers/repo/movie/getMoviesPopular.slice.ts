import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import movieApi from "@servers/api/movieApi";
import { Paginate, MovieType } from "@servers/types/props";

const reducerName = "moviesPopular";

export const moviePopularAdapter = createEntityAdapter<Movie>();

export const initialState = moviePopularAdapter.getInitialState({
  loading: false,
});

export const getMoviesPopular = createAsyncThunk(
  "movie/getMoviesPopular",
  async () => {
    const result = await movieApi.getMovies({
      page: 1,
      type: MovieType.popular,
    });
    return result.data;
  }
);

const slice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMoviesPopular.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(
      getMoviesPopular.fulfilled,
      (state: any, action: PayloadAction<Paginate<Movie>>) => {
        const payload = action.payload;
        moviePopularAdapter.upsertMany(state, payload.results);

        // pedding
        state.loading = false;
      }
    );
  },
});

const reducer = { [reducerName]: slice.reducer };
export default reducer;

export const {
  selectById: selectMoviePopularById,
  selectIds: selectMoviePopularIds,
  selectAll: selectAllMoviePopulars,
} = moviePopularAdapter.getSelectors((state: any) => state[reducerName]);

export const selectMovieSlice = createSelector(selectMoviePopularIds, (state) =>
  state.slice(0, 5)
);
