import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchLatestPosts = createAsyncThunk("posts/fetchLatest", async () => {
  const res = await api.get("/posts")
  console.log("response latest", res);
  return res.data.data;
});

export const fetchTrendingPosts = createAsyncThunk("posts/fetchTrending", async () => {
  const res = await api.get("/posts/trending");
  console.log("res trend", res)
  return res.data.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    latest: [],
    trending: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLatestPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLatestPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.latest = action.payload;
      })
      .addCase(fetchTrendingPosts.fulfilled, (state, action) => {
        state.trending = action.payload;
      })
      .addCase(fetchLatestPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
