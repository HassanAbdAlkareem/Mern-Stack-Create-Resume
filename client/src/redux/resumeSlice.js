import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create resume
export const createResume = createAsyncThunk(
  "resume/createResume",
  async (data, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { user } = getState();
    //
    try {
      const res = await axios.post(
        "https://create-resume-now.herokuapp.com/api/resume/" + user.user._id,
        data
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// get resume
export const getResume = createAsyncThunk(
  "resume/getResume",
  async (data, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { user } = getState();
    try {
      const res = await axios.get(
        "https://create-resume-now.herokuapp.com/api/resume/" + user.user._id
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// reducer resume
const resumeSlice = createSlice({
  name: "resume",
  initialState: { error: false, loading: false, resume: {} },
  reducers: {},
  extraReducers: {
    // Create
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
    // get
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
