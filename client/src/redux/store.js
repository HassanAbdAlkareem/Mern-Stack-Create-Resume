import { configureStore } from "@reduxjs/toolkit";
import resume from "./resumeSlice";
import user from "./authSlice";

export default configureStore({
  reducer: {
    resume,
    user,
  },
});
