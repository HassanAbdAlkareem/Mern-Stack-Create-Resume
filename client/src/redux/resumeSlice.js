import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create resume
export const createResume = createAsyncThunk(
  "resume/createResume",
  async (data, thunk_API) => {
    const { rejectWithValue } = thunk_API;
    try {
      const res = await axios.post("http://localhost:5000/api/resume", data);
      return res.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

// get Resume
export const getResume = createAsyncThunk(
  "resume/getResume",
  async (data, thunk_API) => {
    const { rejectWithValue } = thunk_API;
    try {
      const res = await axios.get("http://localhost:5000/api/resume/" + data);
      return res.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
//
const resumeSlice = createSlice({
  name: "resume",
  initialState: { error: false, loading: false, resume: {} },
  reducers: {},
  extraReducers: {
    [createResume.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [createResume.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
    },
    [createResume.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    [getResume.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [getResume.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.resume = action.payload;
    },
    [getResume.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default resumeSlice.reducer;
