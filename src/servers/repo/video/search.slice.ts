import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import videoApi from "@servers/api/videoApi";
import { Paginate, SearchParams } from "@servers/types/props";

const reducerName = "search";

export const searchAdapter = createEntityAdapter<SearchMultiResult>();

export const initialState = searchAdapter.getInitialState({
  isFirstLoad: true,
  loading: false,
  totalPage: 0,
  totalResult: 0,
});

export const searchBy = createAsyncThunk(
  "search",
  async (props: SearchParams) => {
    const result = await videoApi.search(props);
    return result.data;
  }
);

const slice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(searchBy.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(
      searchBy.fulfilled,
      (state: any, action: PayloadAction<Paginate<SearchMultiResult>>) => {
        const payload = action.payload;
        searchAdapter.upsertMany(state, payload.results);
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

export const { reset: resetStateSearch } = slice.actions;

export const {
  selectById: selectSearchById,
  selectIds: selectSearchIds,
  selectEntities: selectSearchEntities,
  selectAll: selectAllSearchs,
  selectTotal: selectTotalSearchs,
} = searchAdapter.getSelectors((state: any) => state[reducerName]);
