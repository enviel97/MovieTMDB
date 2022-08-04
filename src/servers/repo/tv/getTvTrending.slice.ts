import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import tvApi from "@servers/api/tvApi";
import { Paginate, TvType } from "@servers/types/props";

const reducerName = "tvTrending";

export const tvAdapter = createEntityAdapter<TV>();

export const initialState = tvAdapter.getInitialState({
  loading: false,
});

export const getTvsTrending = createAsyncThunk(
  "tv/getTvTrendings",
  async () => {
    const result = await tvApi.getTvs({ page: 1, type: TvType.top_rated });
    return result.data;
  }
);

const slice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTvsTrending.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(
      getTvsTrending.fulfilled,
      (state: any, action: PayloadAction<Paginate<TV>>) => {
        tvAdapter.upsertMany(state, action.payload.results);
        state.loading = false;
      }
    );
  },
});

const reducer = { [reducerName]: slice.reducer };
export default reducer;

export const {
  selectById: selectTVTrendingById,
  selectIds: selectTVTrendingIds,
  selectEntities: selectTVTrendingEntities,
  selectAll: selectAllTVTrendings,
  selectTotal: selectTotalTVTrendings,
} = tvAdapter.getSelectors((state: any) => state[reducerName]);
