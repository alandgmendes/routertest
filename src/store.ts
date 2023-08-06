import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from './auth/user.slice'
import pessoaReducer from './pages/pessoas/pessoa.slice';
import projetoReducer from './pages/projetos/projeto.slice';

const rootReducer = combineReducers({
  user: userReducer,
  pessoa: pessoaReducer,
  projeto: projetoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
