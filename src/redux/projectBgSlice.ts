import { createSlice } from "@reduxjs/toolkit";
import { data, DataType } from "../data/data";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialStateType {
  stateData: DataType[];
  introHover: number;
  introClick: boolean;
  projectClick: boolean;
  projectClickNum: number;
}

const initialState: InitialStateType = {
  stateData: data, //project, projectBg 컴포넌트에서 active, click에 주로 사용
  introHover: 0, //projectIntro 컴포넌트에서 hover한 이미지 id 번호를 알아낼 때 사용
  introClick: false, //projectIntro 컴포넌트에서 해당 내용을 클릭했는지 알아내기 위해 사용
  projectClick: false, //project 컴포넌트에서 프로젝트를 클릭했는지 알아내기 위해 사용
  projectClickNum: 0,
};

const projectBgSlice = createSlice({
  name: "projectBgSlice",
  initialState,
  reducers: {
    mouseEnterActive: (
      state: InitialStateType,
      action: PayloadAction<number>
    ) => {
      const newValue = [...state.stateData];
      newValue[action.payload].active = true;
      state.stateData = newValue;
    },
    mouseLeaveActive: (
      state: InitialStateType,
      action: PayloadAction<number>
    ) => {
      const newValue = [...state.stateData];
      newValue[action.payload].active = false;
      state.stateData = newValue;
    },
    mouseClick: (state: InitialStateType, action: PayloadAction<number>) => {
      const newValue = [...state.stateData];
      newValue[action.payload].click = true;
      state.stateData = newValue;
    },
    resetData: (state: InitialStateType, action: PayloadAction<number>) => {
      const newValue = [...state.stateData];
      newValue[action.payload].click = false;
      newValue[action.payload].active = false;
      state.stateData = newValue;
    },
    previewClick: (state: InitialStateType, action: PayloadAction<number>) => {
      const newValue = [...state.stateData];
      newValue[action.payload].click = false;
      newValue[action.payload].active = false;
      state.stateData = newValue;
    },
    introHover: (state: InitialStateType, action: PayloadAction<number>) => {
      state.introHover = action.payload;
    },
    introClick: (state: InitialStateType) => {
      state.introClick = !state.introClick;
    },
    projectClick: (state: InitialStateType, action: PayloadAction<boolean>) => {
      state.projectClick = action.payload;
    },
    projectClickNum: (
      state: InitialStateType,
      action: PayloadAction<number>
    ) => {
      state.projectClickNum = action.payload;
    },
  },
});

export const {
  mouseEnterActive,
  mouseLeaveActive,
  mouseClick,
  resetData,
  introHover,
  introClick,
  projectClick,
  projectClickNum,
} = projectBgSlice.actions;
export default projectBgSlice.reducer;
