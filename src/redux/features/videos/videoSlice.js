
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/axios";


const initialState = {
  videos: [],
  loading: false,
  error: null,
};

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/videos");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const extractVideoList = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.data?.data)) return payload.data.data;
  return [];
}

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = extractVideoList(action.payload);
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default videoSlice.reducer;