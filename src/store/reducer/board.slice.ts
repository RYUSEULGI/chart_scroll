import { Action, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "store"
import { IBoard, PageType } from "types/boardTypes";

export const getBoardList = createAsyncThunk('GET_BOARD_LIST', async(pageRequest:PageType) => {
  const {page, size} = pageRequest
  try{
    const response = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`);
    return response.data;
  }catch(e){
    console.log(e);
  }
});

const initialState : IBoard = {
  data : [],
  totalPages: 0,
  totalpassengers: 0
}

const boardSlice = createSlice({
  name : "board",
  initialState,
  reducers: {
    nextPage( state, action: PayloadAction<{page: number}>){
      state.page = action.payload.page + 1
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getBoardList.fulfilled, (state, {payload}) => {
      console.log(payload);
      return payload;
    })
  }
})

export const boardSelector = (state: RootState) => state.boardReducer;
export const {nextPage} = boardSlice.actions;
export default boardSlice.reducer;