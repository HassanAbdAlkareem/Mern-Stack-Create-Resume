import { configureStore } from "@reduxjs/toolkit";
import resume from "./resumeSlice";

export default configureStore({
  reducer: {
    resume,
  },
});
