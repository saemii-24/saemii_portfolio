import { createSlice } from "@reduxjs/toolkit";
import { data, DataType } from "../data/data";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: DataType[] = data; //초기데이터

const projectBgSlice = createSlice({
  name: "projectBgSlice",
  initialState,
  reducers: {
    mouseEnterActive: (state: DataType[], action: PayloadAction<number>) => {
      const newValue = [...state];
      newValue[action.payload].active = true;
      state = newValue;
    },
    mouseLeaveActive: (state: DataType[], action: PayloadAction<number>) => {
      const newValue = [...state];
      newValue[action.payload].active = false;
      state = newValue;
    },
    mouseClick: (state: DataType[], action: PayloadAction<number>) => {
      const newValue = [...state];
      newValue[action.payload].click = true;
      state = newValue;
    },
    resetData: (state: DataType[], action: PayloadAction<number>) => {
      const newValue = [...state];
      newValue[action.payload].click = false;
      state = newValue;
    },
  },
});

export const { mouseEnterActive, mouseLeaveActive, mouseClick, resetData } =
  projectBgSlice.actions;
export default projectBgSlice.reducer;
