import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pessoa: null,
};

const pessoaSlice = createSlice({
  name: "pessoa",
  initialState,
  reducers: {
    setPessoa: (state, action) => {
      state.pessoa = action.payload;
    },
    clearPessoa: (state) => {
      state.pessoa = null;
    },
  },
});

export const { setPessoa, clearPessoa } = pessoaSlice.actions;
export default pessoaSlice.reducer;