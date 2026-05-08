
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/axios";

const initialState = {
  music: [],
  loading: false,
  error: null,
};

export const fetchMusic = createAsyncThunk(
  "music/fetchMusic",
  async (searchQuery,filter, thunkAPI) => {
    try {
      const response = await api.get("/music",
        {params: {
          search: searchQuery,
          filter: filter,
        },
      }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue( error.response?.data || error.message);
    }
  });

const extractMusicList = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.data?.data)) return payload.data.data;
  return [];
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMusic.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMusic.fulfilled, (state, action) => {
        state.loading = false;
        state.music = extractMusicList(action.payload);
      })
      .addCase(fetchMusic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
})

export default musicSlice.reducer;