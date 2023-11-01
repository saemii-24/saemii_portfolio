import { configureStore } from "@reduxjs/toolkit";
import projectBg from "./projectBgSlice";

const store = configureStore({
  reducer: {
    projectBgSlice: projectBg,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
