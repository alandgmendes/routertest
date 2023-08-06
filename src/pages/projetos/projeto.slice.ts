import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projeto: null,
};

const projetoSlice = createSlice({
  name: "projeto",
  initialState,
  reducers: {
    setProjeto: (state, action) => {
      state.projeto = action.payload;
    },
    clearProjeto: (state) => {
      state.projeto = null;
    },
  },
});

export const { setProjeto, clearProjeto } = projetoSlice.actions;
export default projetoSlice.reducer;