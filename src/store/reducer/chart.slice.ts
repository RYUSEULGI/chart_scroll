import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "store"
import { IChartStateType } from "types/chartTypes";

const initialState: IChartStateType = {
  data : [{
    period: 0,
    cycle: 0,
    startDate: "",
    endDate: ""
  }]
};

export const getChart = createAsyncThunk('GET_CHART', async () => {
  try{
    const response = await axios.get("https://motionz-kr.github.io/playground/apis/report.json");
    return response.data;
  }catch(e){
    console.log(e);
  }
});

const chartSlice = createSlice({
  name : "chart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getChart.fulfilled, (state, {payload}) => {
      return payload;
    })
  }
})

export const chartSelector = (state: RootState) => state.chartReducer;
export const {} = chartSlice.actions;
export default chartSlice.reducer;