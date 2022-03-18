import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// login user
export const loginUser = createAsyncThunk(
  "auth/login",
  async (firstName, thunk_API) => {
    const { rejectWithValue } = thunk_API;
    try {
      const res = await axios.post(
        "https://create-resume-now.herokuapp.com/api/user",
        {
          firstName,
        }
      );
      return res.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

// reducer login
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.user = action.payload;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default authSlice.reducer;
