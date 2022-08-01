import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Paginate, PaginateParams, TvType } from "@servers/types/props";
import tvApi from "../../api/tvApi";

const reducerName = "tvs";

export const tvAdapter = createEntityAdapter<TV>();
export const tvTrendingAdapter = createEntityAdapter<TV>();

export const initialState = tvAdapter.getInitialState({
  isFirstLoad: true,
  loading: false,
  totalPage: 0,
  totalResult: 0,
});

export const initialTrendingTvState = tvAdapter.getInitialState({
  loading: false,
});

export const getTvs = createAsyncThunk(
  "tv/getTvs",
  async (props: PaginateParams<TvType>) => {
    const result = await tvApi.getTvs(props);
    return result.data;
  }
);

const slice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTvs.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(
      getTvs.fulfilled,
      (state: any, action: PayloadAction<Paginate<TV>>) => {
        const payload = action.payload;
        tvAdapter.upsertMany(state, payload.results);
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
  selectById: selectTVById,
  selectIds: selectTVIds,
  selectEntities: selectTVEntities,
  selectAll: selectAllTVs,
  selectTotal: selectTotalTVs,
} = tvAdapter.getSelectors((state: any) => state[reducerName]);
