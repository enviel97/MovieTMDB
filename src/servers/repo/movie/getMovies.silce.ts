import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import movieApi from "@servers/api/movieApi";
import { Paginate, PaginateParams, MovieType } from "@servers/types/props";

const reducerName = "movies";

export const movieAdapter = createEntityAdapter<Movie>();

export const initialState = movieAdapter.getInitialState({
  isFirstLoad: true,
  loading: false,
  totalPage: 0,
  totalResult: 0,
});

export const getMovies = createAsyncThunk(
  "movie/getMovies",
  async (props: PaginateParams<MovieType>) => {
    const result = await movieApi.getMovies(props);
    return result.data;
  }
);

const slice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state: any, action) => {
      state.loading = true;
    });
    builder.addCase(
      getMovies.fulfilled,
      (state: any, action: PayloadAction<Paginate<Movie>>) => {
        const payload = action.payload;
        movieAdapter.upsertMany(state, payload.results);
        state.totalPage = payload.total_pages;
        state.totalResult = payload.total_results;

        // pedding
        state.isFirstLoad = false;
        state.loading = false;
      }
    );
  },
});

const reducer = { [reducerName]: slice.reducer };
export default reducer;

export const {
  selectById: selectMovieById,
  selectIds: selectMovieIds,
  selectEntities: selectMovieEntities,
  selectAll: selectAllMovies,
  selectTotal: selectTotalMovies,
} = movieAdapter.getSelectors((state: any) => state[reducerName]);
