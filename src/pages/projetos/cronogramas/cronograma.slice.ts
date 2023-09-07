import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cronograma: null,
};

const cronogramaSlice = createSlice({
  name: "cronograma",
  initialState,
  reducers: {
    setCronograma: (state, action) => {
      state.cronograma = action.payload;
    },
    clearCronograma: (state) => {
      state.cronograma = null;
    },
  },
});

export const { setCronograma, clearCronograma } = cronogramaSlice.actions;
export default cronogramaSlice.reducer;