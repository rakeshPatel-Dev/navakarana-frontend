
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: {
      login: false,
      register: false
  },
  error: null,
}

const loginUser = createAsyncThunk("auth/loginUser", async (credentials, thunkAPI) => {
  try {
    const response = await axios.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const registerUser = createAsyncThunk("auth/registerUser", async (userData, thunkAPI) => {
  try {
    const response = await axios.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logoutUser = createAsyncThunk("auth/logoutUser", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    extraReducers: (builder) => {
      builder
      // login
      .addCase(loginUser.pending, (state) => {
        state.loading.login = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading.login = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading.login = false;
        state.error = action.payload;
      })

      // register
      .addCase(registerUser.pending, (state) => {
        state.loading.register = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading.register = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading.register = false;
        state.error = action.payload;
      })

      // logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload;
      });

    }
})

export default authSlice.reducer;
export { loginUser, registerUser, logoutUser };