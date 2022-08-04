import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import movieApi from "@servers/api/movieApi";
import { Paginate, MovieType } from "@servers/types/props";

const reducerName = "moviesTrending";

export const movieTrendingAdapter = createEntityAdapter<Movie>();

export const initialState = movieTrendingAdapter.getInitialState({
  loading: false,
});

export const getMoviesTrending = createAsyncThunk(
  "movie/getMoviesTrending",
  async () => {
    const result = await movieApi.getMovies({
      page: 1,
      type: MovieType.top_rated,
    });
    return result.data;
  }
);

const slice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMoviesTrending.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(
      getMoviesTrending.fulfilled,
      (state: any, action: PayloadAction<Paginate<Movie>>) => {
        const payload = action.payload;
        movieTrendingAdapter.upsertMany(state, payload.results);

        // pedding
        state.loading = false;
      }
    );
  },
});

const reducer = { [reducerName]: slice.reducer };
export default reducer;

export const {
  selectById: selectMovieTrendingById,
  selectAll: selectAllMovieTrendings,
} = movieTrendingAdapter.getSelectors((state: any) => state[reducerName]);
